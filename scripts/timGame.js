module.exports = async function (context, signal) {
    const { log, json } = require('../modules/logger');
    // const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));
    const { firstPage, bot, profileNameId, getAks, genlogin, http, browser } = context;
    // const { signal } = context;
    let currentPage = firstPage;
    const botName = bot.name;
    let demLoop = 0;
    let iframeLinkHotsName = null;
    try {
        // log(`[${profileNameId}][timGame]signal ${json(signal)}`, null, 'w');
        log(`[${profileNameId}][timGame]Tìm Game`, null, 'i', '=');
        if (signal.aborted) {
            throw new Error(`timeout`);
        }
        //TODO: check tắt game đang mở
        log(`[${profileNameId}][timGame]check tắt game đang mở`, null, 'i');
        let attempts = 0;
        const maxAttempts = 5;
        while (attempts < maxAttempts) {
            attempts++;
            // Kiểm tra sự tồn tại của phần tử bằng XPath
            const kq5 = await genlogin.elementExistsByXPath(currentPage, getAks.Iframe, 1000);
            if (kq5) {
                log(`[${profileNameId}][timGame][gui]Đang có game mở`, null, 'w');
                await delay(1000);
                // Thử tắt game
                const kq6 = await TatGame();
                if (!kq6) {
                    throw new Error('Không tắt được game');
                }
                log(`[${profileNameId}][timGame][gui]TatGame ok`);
            } else {
                // Dừng vòng lặp nếu không tìm thấy phần tử nữa
                break;
            }
        }
        if (attempts === maxAttempts) {
            log(`[${profileNameId}][timGame][gui] Đã thử ${maxAttempts} lần nhưng vẫn còn game mở`, null, false);
            throw new Error('Không tắt được game');
        }
        log(`[${profileNameId}][timGame]Vào Tìm game ${botName}`, null, 'i');
        // TODO: Kiểm tra xem inputsearch co existence  
        await delay(1000);
        let demLoop = 0;
        const maxDemLoop = 10;
        while (demLoop < maxDemLoop) {
            demLoop++;
            //TODO: Check Nút back để hiện ô tìm kiếm
            const kqCkSideBarRightClose = await genlogin.elementExistsByXPath(currentPage, getAks.sideBarRightClose, 1000);
            if (!kqCkSideBarRightClose) {
                log(`[${profileNameId}][timGame] Không tìm thấy nút sideBarRightClose`, null, false);
            }
            else {
                log(`[${profileNameId}][timGame] Tìm thấy nút sideBarRightClose`);
                const kqClickSideBarRightClose = await clickM(getAks.sideBarRightClose);
                if (!kqClickSideBarRightClose) {
                    log(`[${profileNameId}][timGame] Không click được vào nút sideBarRightClose`, false);
                    // throw new Error('Không click được vào nút sideBarRightClose');
                    continue;
                }
                log(`[${profileNameId}][timGame] click nút sideBarRightClose ok`);
                await delay(1000);
                continue;
            }
            //TODO: Check Nút back để hiện ô tìm kiếm
            const kqCkBackArrow = await genlogin.elementExistsByXPath(currentPage, getAks.BackArrow, 1000);
            if (!kqCkBackArrow) {
                log(`[${profileNameId}][timGame] Không tìm thấy nút BackArrow`, null, false);
            }
            else {
                log(`[${profileNameId}][timGame] Tìm thấy nút BackArrow`);
                const kqClickBackArrow = await clickM(getAks.BackArrow);
                if (!kqClickBackArrow) {
                    log(`[${profileNameId}][timGame] Không click được vào nút BackArrow`, null, false);
                    // throw new Error('Không click được vào nút BackArrow');
                    continue;
                }
                log(`[${profileNameId}][timGame] click nút BackArrow ok`);
                await delay(1000);
                continue;
            }
            const inputsearch = await genlogin.elementExistsByXPath(currentPage, getAks.InputSearch, 1000);
            if (inputsearch) {
                log(`[${profileNameId}][timGame]tìm thấy inputsearch`, null);
                break;
            }
        }
        // const inputsearch = await genlogin.elementExistsByXPath(currentPage, getAks.InputSearch, 5000);
        // if (!inputsearch) {
        //     log(`[${profileNameId}][timGame]Không tìm thấy inputsearch`, null, false);
        //     throw new Error('Không tìm thấy inputsearch');
        // }
        // log(`[${profileNameId}][timGame] Tìm thấy inputsearch ok`);
        // TODO: Click vào inputsearch
        const kq = await dbClickM(getAks.InputSearch);
        if (!kq) {
            log(`[${profileNameId}][timGame]Không click được vào inputsearch`, false);
            throw new Error('Không click được vào inputsearch');
        }
        log(`[${profileNameId}][timGame] click inputsearch ok`);
        await delay(1000);
        // TODO: Type search
        const kq2 = await genlogin.typeText(currentPage, getAks.InputSearch, botName);
        await delay(1000);
        if (!kq2) {
            log(`[${profileNameId}][timGame]Không nhập được vào inputsearch`, false);
            throw new Error('Không nhập được vào inputsearch');
        }
        log(`[${profileNameId}][timGame] nhập ${botName} ok`);
        await delay(5000);
        // TODO: Kiểm tra xem SearchRes có tồn tại không
        const kq3 = await genlogin.elementExistsByXPath(currentPage, getAks.SearchRes);
        if (!kq3) {
            log(`[${profileNameId}][timGame]Không tìm thấy SearchRes`, false);
            throw new Error('Không tìm thấy SearchRes');
        }
        log(`[${profileNameId}][timGame]Tìm thấy SearchRes ok`);
        await delay(1000);
        // TODO: Click vào SearchRes
        const kq4 = await clickM(getAks.SearchRes);
        if (!kq4) {
            log(`[${profileNameId}][timGame]Không click được vào SearchRes`, false);
            throw new Error('Không click được vào SearchRes');
        }
        log(`[${profileNameId}][timGame] click SearchRes ok`);
        // TODO: Check game có Gui hay không
        if (bot.gui === "1") {
            log(`[${profileNameId}][timGame]Gui`);
            await delay(1000);
            const kq10 = await gui();
            if (!kq10) {
                throw new Error('Không check gui được');
            }
            if (kq10 === 'loop') {
                log(`[${profileNameId}][timGame]Gui ok, loop lại game nè bro`);
                return { status: 'loop' };
            }
            await delay(1000);
            log(`[${profileNameId}][timGame]Gui ok`);
            return { status: true, HostName: iframeLinkHotsName };

        }
        else {
            await delay(1000);
            log(`[${profileNameId}][timGame]NoGui`, null, false);
            return { status: true };
        }

    } catch (error) {
        log(`[${profileNameId}][timGame][Lỗi]1: ${error}`, null, false);
        return { status: false };
    }
    async function gui() {
        try {
            log(`[${profileNameId}][timGame][gui]Vào Gui mở game lên`, null, 'i');
            // TODO: Kiểm tra xem BackInPopup có tồn tại không

            await delay(1000);
            //TODO: Check first start
            const kqFirstStart = await checkFirstStart();
            if (kqFirstStart === 'loop') {
                log(`[${profileNameId}][timGame][gui]Check start Game mới ok , loop lại game nè bro`);
                return 'loop';
            }
            // if (!kqFirstStart) {
            //     log(`[${profileNameId}][timGame][gui]Game đã chơi rồi bro`,null, false);
            // }
            await delay(1000);
            //TODO: Check game đã đăng nhập
            //TODO: Check start game
            const kq20 = await checkStartGame();
            if (!kq20) {
                log(`[${profileNameId}][timGame][gui]Không start game được`, false);
                throw new Error('Không start game được');
            }
            await delay(5000);
            const kq21 = await checkLoadGame();
            if (!kq21) {
                log(`[${profileNameId}][timGame][gui]Không load game được`, false);
                throw new Error('Không load game được');
            }
            await delay(1000);
            log(`[${profileNameId}][timGame][gui]start game ok`);
            return true;
        } catch (error) {
            log(`[${profileNameId}][timGame][gui][Lỗi]: ${error}`, false);
            return null;
        }
    }
    async function TatGame() {
        try {

            log(`[${profileNameId}][timGame][TatGame]Vào tắt game lần:${demLoop}`);
            // TODO: check nút close game
            const kq7 = await genlogin.elementExistsByXPath(currentPage, getAks.CloseGame, 1000);
            if (!kq7) {
                await delay(1000);
                const kq9 = await genlogin.elementExistsByXPath(currentPage, getAks.Iframe, 1000);
                if (kq9) {
                    log(`[${profileNameId}][timGame][TatGame]Phát hiện game đang mở không tắt được`);
                    throw new Error('Không tìm thấy CloseGame');
                }
                log(`[${profileNameId}][timGame][TatGame]Tắt game OK`);
                return true;
            }
            // TODO: click close game
            const kq8 = await clickM(getAks.CloseGame);
            if (!kq8) {
                log(`[${profileNameId}][timGame][TatGame]Không click được vào CloseGame`, null, false);
            }
            log(`[${profileNameId}][timGame][TatGame]click CloseGame OK`);
            await delay(2000);
            const kq11 = await closeAnyway();
            if (!kq11) {
                log(`[${profileNameId}][timGame][TatGame]Không tắt được game closeAnyway failed`, false);
            }
            return true;

        } catch (error) {
            log(`[${profileNameId}][timGame][TatGame][Lỗi]: ${error}`, false);
            return null;
        }
    }
    async function closeAnyway() {
        try {
            log(`[${profileNameId}][timGame][closeAnyway]check close anyway`);
            // TODO: Kiểm tra xem closeAnyway có tồn tại không
            const kq10 = await genlogin.elementExistsByXPath(currentPage, getAks.ForceClosePopup, 5000);
            if (!kq10) {
                log(`[${profileNameId}][timGame][closeAnyway]Không tìm thấy closeAnyway`, false);
                return true;
            }
            log(`[${profileNameId}][timGame][closeAnyway]Tìm thấy closeAnyway`);
            await delay(2000);
            // TODO: click close anyway
            const kq11 = await clickM(getAks.ForceClosePopup);
            if (!kq11) {
                throw new Error('Không click được vào ForceClosePopup');
            }
            log(`[${profileNameId}][timGame][closeAnyway]click ForceClosePopup OK`);
            await delay(2000);
            return true;
        } catch (error) {
            log(`[${profileNameId}][timGame][closeAnyway][Lỗi]: ${error}`, false);
            return null;
        }
    }
    async function launchConfirm() {
        try {
            log(`[${profileNameId}][timGame][launchConfirm]check launchConfirm`);
            // TODO: Kiểm tra xem launchConfirm có tồn tại không
            const kq10 = await genlogin.elementExistsByXPath(currentPage, getAks.LaunchConfirm, 3000);
            if (!kq10) {
                log(`[${profileNameId}][timGame][launchConfirm]Không tìm thấy launchConfirm`, null, false);
                return null;
            }

            log(`[${profileNameId}][timGame][launchConfirm]Tìm thấy launchConfirm`);
            await delay(2000);
            // TODO: click launchConfirm
            const kq11 = await clickM(getAks.LaunchConfirm);
            if (!kq11) {
                log(`[${profileNameId}][timGame][launchConfirm]Không click được vào launchConfirm`, null, false);
                return null;
            }
            log(`[${profileNameId}][timGame][launchConfirm]click LaunchConfirm OK`);
            await delay(2000);
            return true;
        } catch (error) {
            log(`[${profileNameId}][timGame][launchConfirm][Lỗi]: ${error}`, false);
            return null;
        }
    }
    async function checkStartGame() {
        try {
            log(`[${profileNameId}][timGame][checkStartGame] Bắt đầu kiểm tra Start Game`, null, '-');

            // Danh sách các button cần kiểm tra theo thứ tự ưu tiên
            const buttons = [
                { xpath: bot.playtag, name: "playtag" },
                { xpath: getAks.MainOpenButton, name: "MainOpenButton" },
                { xpath: getAks.ButtonTextPlay, name: "ButtonTextPlay" },
                { xpath: getAks.ButtonTextClaim, name: "ButtonTextClaim" },
                { xpath: getAks.ButtonTextStart, name: "ButtonTextStart" },
                { xpath: getAks.ButtonTextLaunch, name: "ButtonTextLaunch" },
                { xpath: getAks.ButtonTextMining, name: "ButtonTextMining" },
                { xpath: getAks.ButtonInChat, name: "ButtonInChat" }
            ];

            // Duyệt qua từng button trong danh sách
            for (let i = 0; i < buttons.length; i++) {
                const button = buttons[i];
                if (!button.xpath) { continue; }
                const exists = await genlogin.elementExistsByXPath(currentPage, button.xpath, 1000);

                if (exists) {
                    log(`[${profileNameId}][timGame][checkStartGame] ${button.name} tồn tại`);

                    const clicked = await clickM(button.xpath);
                    if (!clicked) {
                        throw new Error(`Không click được vào ${button.name}`);
                    }

                    log(`[${profileNameId}][timGame][checkStartGame] Click ${button.name} OK`);
                    await launchConfirm();
                    await delay(2000);
                    return true; // Kết thúc hàm nếu đã tìm thấy và click thành công
                }
            }

            log(`[${profileNameId}][timGame][checkStartGame] Không tìm thấy nút mở game`, null, false);
            throw new Error('Không tìm thấy nút mở game');

        } catch (error) {
            log(`[${profileNameId}][timGame][checkStartGame] Chưa load được game: ${error.message}`, null, false);
            return null;
        }
    }

    async function checkLoadGame() {
        try {
            log(`[${profileNameId}][timGame][checkLoadGame] Đang kiểm tra tải game`);

            const tags = [bot.tagGame, bot.tagGame1, bot.tagGame2, bot.tagGame3, bot.tagGame4];
            if (parseInt(bot.newTab) === 1) {
                log(`[${profileNameId}][timGame][checkLoadGame]newTab mode`, null, 'w', '-');
                const maxAttempts = 5;
                const iframeLink = await genlogin.getAttributeFromXPath(currentPage, getAks.Iframe, 'src', 1000);
                await delay(1000);
                if (!iframeLink) {
                    log(`[${profileNameId}][timGame][checkLoadGame] Không tìm thấy iframe link`, null, false);
                    throw new Error('Không tìm thấy iframe link');
                }
                log(`[${profileNameId}][timGame][checkLoadGame]tìm thấy iframe link`);
                const kqNewTab = await genlogin.newTab(browser);
                if (!kqNewTab) {
                    log(`[${profileNameId}][timGame][checkLoadGame] Không mở tab mới`, null, false);
                    throw new Error('Không mở tab mới');
                }
                log(`[${profileNameId}][timGame][checkLoadGame] Mở tab mới OK`);
                const newPage = await genlogin.getCurrentPage(browser);
                if (!newPage) {
                    log(`[${profileNameId}][timGame][checkLoadGame] Không lấy page mới`, null, false);
                    throw new Error('Không lấy page mới');
                }
                const parsedUrl = new URL(iframeLink);
                iframeLinkHotsName = parsedUrl.hostname;
                const kqOpenLink = await genlogin.openUrl(newPage, iframeLink);
                if (!kqOpenLink) {
                    log(`[${profileNameId}][timGame][checkLoadGame] Không mở link iframe`, null, false);
                    throw new Error('Không mở link iframe');
                }
                log(`[${profileNameId}][timGame][checkLoadGame] Mở link iframe OK`);
                await delay(1000);

                for (let attempt = 1; attempt <= maxAttempts; attempt++) {
                    log(`[${profileNameId}][timGame][checkLoadGame] Lần kiểm tra thứ ${attempt}`);
                    for (let i = 0; i < tags.length; i++) {
                        const result = await genlogin.elementExistsByXPath(newPage, tags[i], 2000);
                        if (result) {
                            log(`[${profileNameId}][timGame][checkLoadGame] Game đã sẵn sàng với tag ${tags[i]}`, false);
                            // await genlogin.switchFrame(currentPage, "mainframe");
                            await delay(1000);
                            return true;
                        }
                    }
                    // Đợi 5 giây trước khi thử lại
                    if (attempt < maxAttempts) {
                        await new Promise(resolve => setTimeout(resolve, 5000));
                    }
                }

                log(`[${profileNameId}][timGame][checkLoadGame] Không load được game sau ${maxAttempts} lần thử`);
                throw new Error('Không load được game');
            }
            else {
                log(`[${profileNameId}][timGame][checkLoadGame] popup mode`, null, 'w', '-');
                const maxAttempts = 5;
                const subframe = await genlogin.switchFrame(currentPage, getAks.Iframe);
                await delay(1000);
                if (!subframe) {
                    log(`[${profileNameId}][timGame][checkLoadGame] Không tìm thấy iframe`, null, false);
                    throw new Error('Không tìm thấy iframe');
                }

                for (let attempt = 1; attempt <= maxAttempts; attempt++) {
                    log(`[${profileNameId}][timGame][checkLoadGame] Lần kiểm tra thứ ${attempt}`);

                    for (let i = 0; i < tags.length; i++) {
                        const result = await genlogin.elementExistsByXPath(subframe, tags[i], 2000);
                        if (result) {
                            log(`[${profileNameId}][timGame][checkLoadGame] Game đã sẵn sàng với tag ${tags[i]}`, false);
                            await genlogin.switchFrame(currentPage, "mainframe");
                            await delay(1000);
                            return true;
                        }
                    }

                    // Đợi 5 giây trước khi thử lại
                    if (attempt < maxAttempts) {
                        await new Promise(resolve => setTimeout(resolve, 5000));
                    }
                }

                log(`[${profileNameId}][timGame][checkLoadGame] Không load được game sau ${maxAttempts} lần thử`);
                throw new Error('Không load được game');
            }

        } catch (error) {
            log(`[${profileNameId}][timGame][checkLoadGame] Chưa load được game`, null, false);
            await genlogin.switchFrame(currentPage, "mainFrame");
            await delay(1000);
            return null;
        }
    }
    async function checkFirstStart() {
        try {
            await delay(1000);
            const FirstStartBtn = await genlogin.elementExistsByXPath(currentPage, getAks.FirstStartBtn, 3000);
            if (!FirstStartBtn) {
                return null;
            }
            log(`[${profileNameId}][timGame][checkFirstStart] Game mới nè bro`, null, true, '-');
            log(`[${profileNameId}][timGame][checkFirstStart] Chạy ref để vào game`);
            await delay(1000);

            const kq0 = await ShowInputSearch();
            if (!kq0) {
                log(`[${profileNameId}][timGame][checkFirstStart] Không thấy inputSearch`, null, false);
                return null;
            }

            //TODO: Vào Saved Messages
            await delay(1000);
            // log(`[${profileNameId}][${botName}][checkFirstStart]Ra game OK`);
            const checkInputSearch = await genlogin.elementExistsByXPath(currentPage, getAks.InputSearch, 2000);
            if (!checkInputSearch) {
                log(`[${profileNameId}][${botName}][checkFirstStart]Không tìm thấy InputSearch`, null, false);
                return null;
            }
            log(`[${profileNameId}][${botName}][checkFirstStart] Tìm thấy InputSearch`);
            const clicked = await dbClickM(getAks.InputSearch);
            if (!clicked) {
                log(`[${profileNameId}][${botName}][checkFirstStart]Không click được vào InputSearch`, null, false);
                return null;
            }
            log(`[${profileNameId}][${botName}][checkFirstStart]Click InputSearch OK`);
            await delay(1000);
            const typeText = await genlogin.typeText(currentPage, getAks.InputSearch, 'Saved Messages', 1, 2000);
            if (!typeText) {
                log(`[${profileNameId}][${botName}][checkFirstStart]Không type được vào InputSearch`, null, false);
                return null;
            }
            log(`[${profileNameId}][${botName}][checkFirstStart]Type vào InputSearch OK 'Saved Messages'`);
            await delay(5000);
            const kqSearchRes = await genlogin.elementExistsByXPath(currentPage, getAks.SearchRes, 2000);
            if (!kqSearchRes) {
                log(`[${profileNameId}][${botName}][checkFirstStart]Không tìm thấy SearchRes`, null, false);
                return null;
            }
            log(`[${profileNameId}][${botName}][checkFirstStart] Tìm thấy SearchRes`);
            const clicked1 = await clickM(getAks.SearchRes);
            if (!clicked1) {
                log(`[${profileNameId}][${botName}][checkFirstStart]Không click được vào SearchRes`, null, false);
                return null;
            }
            log(`[${profileNameId}][${botName}][checkFirstStart]Click SearchRes OK`);
            //TODO: Ckeck đã có link ref trong này chưa
            await delay(2000);
            const xpathRef = `(//a[@class='anchor-url' and @href='${bot.ref}'])[last()]`;
            const checkLinkRef = await clickLinkRef(xpathRef);
            if (checkLinkRef) {
                log(`[${profileNameId}][${botName}][checkFirstStart]click link ref ok`);
                await reCheckClickStart();
                return 'loop';
            }
            log(`[${profileNameId}][${botName}][checkFirstStart]Không Tìm thấy link ref`, null, false);
            //TODO Nhập link ref vào chat
            await delay(2000);
            const checkChatInput = await genlogin.elementExistsByXPath(currentPage, getAks.ChatInput, 2000);
            if (!checkChatInput) {
                log(`[${profileNameId}][${botName}][checkFirstStart]Không tìm thấy ChatInput`, null, false);
                return null;
            }
            log(`[${profileNameId}][${botName}][checkFirstStart] Tìm thấy ChatInput`);
            const click2 = await dbClickM(getAks.ChatInput);
            if (!click2) {
                log(`[${profileNameId}][${botName}][checkFirstStart]Không click được vào ChatInput`, null, false);
            }
            else {
                log(`[${profileNameId}][${botName}][checkFirstStart] Click ChatInput OK`);
            }
            await delay(2000);
            const typeText1 = await genlogin.typeText(currentPage, getAks.ChatInput, bot.ref, 1, 2000);
            if (!typeText1) {
                log(`[${profileNameId}][${botName}][checkFirstStart]Không type được vào ChatInput`, null, false);
            }
            else {
                log(`[${profileNameId}][${botName}][checkFirstStart]Type vào ChatInput OK ${bot.ref}`);
            }
            await delay(2000);
            const checkBtnSend = await clickM(getAks.BtnSend);
            if (!checkBtnSend) {
                log(`[${profileNameId}][${botName}][checkFirstStart]Không click được vào BtnSend`, null, false);
            }
            else {
                log(`[${profileNameId}][${botName}][checkFirstStart] Click BtnSend OK`);
            }

            await delay(2000);
            //TODO: Click vào link ref
            const checkLinkRef1 = await clickLinkRef(xpathRef);
            if (checkLinkRef1) {
                log(`[${profileNameId}][${botName}][checkFirstStart]Click vào LinkRef ok`);
                await reCheckClickStart();
                return 'loop';
            }
            log(`[${profileNameId}][${botName}][checkFirstStart]Không Click được LinkRef`);
            return null;
        } catch (error) {
            log(`[${profileNameId}][${botName}][checkFirstStart][Lỗi]: ${error}`, null, false);
            return null;
        }
    }
    async function clickLinkRef(xpathRef) {
        try {
            await delay(1000);
            const checkLinkRef = await genlogin.elementExistsByXPath(currentPage, xpathRef, 2000);
            if (checkLinkRef) {
                log(`[${profileNameId}][${botName}][clickLinkRef]tìm thấy LinkRef`);
                const clickLinkRef = await clickM(xpathRef);
                if (!clickLinkRef) {
                    log(`[${profileNameId}][${botName}][clickLinkRef]Không click được vào LinkRef`, null, false);
                    return null;
                }
                log(`[${profileNameId}][${botName}][clickLinkRef] Click LinkRef OK`);
                await delay(2000);
                const checklaunchConfirm = await launchConfirm();
                if (!checklaunchConfirm) {
                    log(`[${profileNameId}][${botName}][clickLinkRef]Không click được vào launchConfirm`, null, false);
                }
                else {
                    log(`[${profileNameId}][${botName}][clickLinkRef] Click launchConfirm OK`);
                }
                log(`[${profileNameId}][${botName}][clickLinkRef] click ref OK`);
                return true;
            }
            log(`[${profileNameId}][${botName}][clickLinkRef]Không tìm thấy LinkRef ${xpathRef}`, null, false);
            return null;
        } catch (error) {
            log(`[${profileNameId}][${botName}][clickLinkRef][Lỗi]: ${error}`, null, false);
            return null;
        }
    }

    async function reCheckClickStart() {
        try {
            await delay(1000);

            const checkInputSearch = await genlogin.elementExistsByXPath(currentPage, getAks.InputSearch, 2000);
            if (!checkInputSearch) {
                log(`[${profileNameId}][${botName}][reCheckClickStart]Không tìm thấy InputSearch`, null, false);
                return null;
            }
            log(`[${profileNameId}][${botName}][reCheckClickStart] Tìm thấy InputSearch`);
            const clicked = await dbClickM(getAks.InputSearch);
            if (!clicked) {
                log(`[${profileNameId}][${botName}][reCheckClickStart]Không click được vào InputSearch`, null, false);
                return null;
            }
            log(`[${profileNameId}][${botName}][reCheckClickStart]Click InputSearch OK`);
            await delay(1000);
            const typeText = await genlogin.typeText(currentPage, getAks.InputSearch, botName, 1, 2000);
            if (!typeText) {
                log(`[${profileNameId}][${botName}][reCheckClickStart]Không type được vào InputSearch`, null, false);
                return null;
            }
            log(`[${profileNameId}][${botName}][reCheckClickStart]Type vào InputSearch OK`);
            await delay(5000);
            const kqSearchRes = await genlogin.elementExistsByXPath(currentPage, getAks.SearchRes, 2000);
            if (!kqSearchRes) {
                log(`[${profileNameId}][${botName}][reCheckClickStart]Không tìm thấy SearchRes`, null, false);
                return null;
            }
            log(`[${profileNameId}][${botName}][reCheckClickStart] Tìm thấy SearchRes`);
            const clicked1 = await clickM(getAks.SearchRes);
            if (!clicked1) {
                log(`[${profileNameId}][${botName}][reCheckClickStart]Không click được vào SearchRes`, null, false);
                return null;
            }
            log(`[${profileNameId}][${botName}][reCheckClickStart]Click SearchRes OK`);
            //TODO: Check lại nút start
            await delay(1000);
            const FirstStartBtn1 = await genlogin.elementExistsByXPath(currentPage, getAks.FirstStartBtn, 3000);
            if (!FirstStartBtn1) {
                return null;
            }
            log(`[${profileNameId}][${botName}][reCheckClickStart] vẫn thấy nút start`);
            await delay(1000);
            const clickStart = await clickM(getAks.FirstStartBtn);
            if (!clickStart) {
                log(`[${profileNameId}][${botName}][reCheckClickStart]Không click được vào nút start`, null, false);
                return null;
            }
            log(`[${profileNameId}][${botName}][reCheckClickStart] Click start OK`);
            await delay(2000);
            return true;
        } catch (error) {
            log(`[${profileNameId}][${botName}][reCheckClickStart][Lỗi]: ${error}`, null, false);
            return null;
        }
    }
    async function ShowInputSearch() {
        try {
            // TODO: Kiểm tra xem inputsearch co existence  
            log(`[${profileNameId}][timGame][ShowInputSearch] ShowInputSearch`, null, true, '-');
            await delay(500);
            let demLoop = 0;
            const maxDemLoop = 10;
            while (demLoop < maxDemLoop) {
                demLoop++;
                //TODO: Check Nút back để hiện ô tìm kiếm
                const kqCkSideBarRightClose = await genlogin.elementExistsByXPath(currentPage, getAks.sideBarRightClose, 1000);
                if (!kqCkSideBarRightClose) {
                    log(`[${profileNameId}][timGame][ShowInputSearch] Không tìm thấy nút sideBarRightClose`, null, false);
                }
                else {
                    log(`[${profileNameId}][timGame][ShowInputSearch] Tìm thấy nút sideBarRightClose`);
                    const kqClickSideBarRightClose = await clickM(getAks.sideBarRightClose);
                    if (!kqClickSideBarRightClose) {
                        log(`[${profileNameId}][timGame][ShowInputSearch] Không click được vào nút sideBarRightClose`, false);
                        // throw new Error('Không click được vào nút sideBarRightClose');
                        continue;
                    }
                    log(`[${profileNameId}][timGame][ShowInputSearch] click nút sideBarRightClose ok`);
                    await delay(1000);
                    continue;
                }
                //TODO: Check Nút back để hiện ô tìm kiếm
                const kqCkBackArrow = await genlogin.elementExistsByXPath(currentPage, getAks.BackArrow, 1000);
                if (!kqCkBackArrow) {
                    log(`[${profileNameId}][timGame][ShowInputSearch] Không tìm thấy nút BackArrow`, null, false);
                }
                else {
                    log(`[${profileNameId}][timGame][ShowInputSearch] Tìm thấy nút BackArrow`);
                    const kqClickBackArrow = await clickM(getAks.BackArrow);
                    if (!kqClickBackArrow) {
                        log(`[${profileNameId}][timGame][ShowInputSearch] Không click được vào nút BackArrow`, null, false);
                        // throw new Error('Không click được vào nút BackArrow');
                        continue;
                    }
                    log(`[${profileNameId}][timGame][ShowInputSearch] click nút BackArrow ok`);
                    await delay(1000);
                    continue;
                }
                const inputsearch = await genlogin.elementExistsByXPath(currentPage, getAks.InputSearch, 1000);
                if (inputsearch) {
                    log(`[${profileNameId}][timGame][ShowInputSearch]tìm thấy inputsearch`, null);
                    break;
                }
            }
            const kq = await dbClickM(getAks.InputSearch);
            if (!kq) {
                log(`[${profileNameId}][timGame][ShowInputSearch]Không click được vào inputsearch`, false);
            }
            else {
                log(`[${profileNameId}][timGame][ShowInputSearch] click inputsearch ok`);
            }

            return true;
        }
        catch (error) {
            log(`[${profileNameId}][${botName}][timGame][ShowInputSearch][Lỗi]: ${error}`, null, false);
            return null;

        }
    }
    async function click(xpath, tagClick = false) {
        try {
            await delay(1000);
            const clicked = await genlogin.click(subframe, { xpath: xpath, mainframe: currentPage, browser: browser, dbclick: false, tagClick: tagClick }, 1000);
            await delay(1000);
            if (!clicked) {
                log(`[${profileNameId}][${botName}][click]Không click được vào ${xpath}`, null, false);
                return null;
            }
            log(`[${profileNameId}][${botName}][click]Click ${xpath} OK`);
            return clicked;
        } catch (error) {
            log(`[${profileNameId}][${botName}][click][Lỗi]: ${error}`, null, false);
            return null;
        }
    }
    async function dbClick(xpath, tagClick = true) {
        try {
            await delay(1000);
            const clicked = await genlogin.click(subframe, { xpath: xpath, mainframe: currentPage, browser: browser, dbclick: true, tagClick: tagClick }, 1000);
            await delay(1000);
            if (!clicked) {
                log(`[${profileNameId}][${botName}][dbclick]Không dbclick được vào ${xpath}`, null, false);
                return null;
            }
            log(`[${profileNameId}][${botName}][dbclick]dbclick ${xpath} OK`);
            return clicked;
        } catch (error) {
            log(`[${profileNameId}][${botName}][dbclick][Lỗi]: ${error}`, null, false);
            return null;
        }
    }
    async function clickM(xpath, tagClick = false) {
        try {
            await delay(1000);
            const clicked = await genlogin.click(currentPage, { xpath: xpath, mainframe: currentPage, browser: browser, dbclick: false, tagClick: tagClick }, 3000);
            await delay(1000);
            if (!clicked) {
                log(`[${profileNameId}][${botName}][clickM]Không click được vào ${xpath}`, null, false);
                return null;
            }
            log(`[${profileNameId}][${botName}][clickM]Click ${xpath} OK`);
            return clicked;
        } catch (error) {
            log(`[${profileNameId}][${botName}][clickM][Lỗi]: ${error}`, null, false);
            return null;
        }
    }
    async function dbClickM(xpath, tagClick = false) {
        try {
            await delay(1000);
            const clicked = await genlogin.click(currentPage, { xpath: xpath, mainframe: currentPage, browser: browser, dbclick: true, tagClick: tagClick }, 5000);
            await delay(1000);
            if (!clicked) {
                log(`[${profileNameId}][${botName}][dbClickM]Không click được vào ${xpath}`, null, false);
                return null;
            }
            log(`[${profileNameId}][${botName}][dbClickM]Click ${xpath} OK`);
            return clicked;
        } catch (error) {
            log(`[${profileNameId}][${botName}][dbClickM][Lỗi]: ${error}`, null, false);
            return null;
        }
    }
    async function clickP(x, y) {
        try {
            await delay(1000);
            const clicked = await genlogin.click(currentPage, { x: x, y: y, mainframe: currentPage, browser: browser }, 1000);
            await delay(1000);
            if (!clicked) {
                log(`[${profileNameId}][${botName}][click]Không click được vào tọa độ ${x}:${y}`, false);
                throw new Error(`Không click được vào ${xpath}`);
            }
            log(`[${profileNameId}][${botName}][click]Click ${x}:${y} OK`);
            return clicked;
        } catch (error) {
            log(`[${profileNameId}][${botName}][click][Lỗi]: ${error}`, false);
            return null;
        }
    }
    async function delay(ms) {
        return new Promise((resolve) => {
            if (signal.aborted) { throw new Error(`timeout`); }
            setTimeout(resolve, ms); // Gọi resolve sau khi hết thời gian ms
        });
    }
};
