const {expect} = require('chai');
const puppeteer = require('puppeteer');
const path = require('path');

describe('Fingerprinting on Chrome Headless', function () {
    let browser;
    let page;

    before(async function () {
        browser = await puppeteer.launch();
        page = await browser.newPage();
    });

    beforeEach(async function () {
        page = await browser.newPage();
        await page.goto('file://' + path.resolve(__dirname, 'test.html'), {
            waitUntil: 'load'
        });
    });

    afterEach(async function () {
        await page.close();
    });

    after(async function () {
        await browser.close();
    });

    it('videoCodecs should not be null', async () => {
        const videoCodecs = await page.evaluate(async () => {
            const fingerprint = await fpCollect.generateFingerprint();
            return fingerprint.videoCodecs;
        });

        expect(videoCodecs).to.deep.equal({
            ogg: 'probably',
            h264: '',
            webm: 'probably'
        });
    });

    it('audioCodecs should not be null', async () => {
        const audioCodecs = await page.evaluate(async () => {
            const fingerprint = await fpCollect.generateFingerprint();
            return fingerprint.audioCodecs;
        });

        expect(audioCodecs).to.deep.equal({
            ogg: 'probably',
            mp3: 'probably',
            wav: 'probably',
            m4a: '',
            aac: ''
        });
    });

    it('Sequentum should be false', async () => {
        const sequentum = await page.evaluate(async () => {
            const fingerprint = await fpCollect.generateFingerprint();
            return fingerprint.sequentum;
        });
        expect(sequentum).to.be.false;
    });

    it('tpCanvas should be (0, 0, 0, 0)', async () => {
        const tpCanvas = await page.evaluate(async () => {
            const fingerprint = await fpCollect.generateFingerprint();
            return fingerprint.tpCanvas;
        });
        expect(tpCanvas).to.deep.equal({0: 0, 1: 0, 2: 0, 3: 0});
    });

    it('deviceMemory should be a number', async () => {
        const deviceMemory = await page.evaluate(async () => {
            const fingerprint = await fpCollect.generateFingerprint();
            return fingerprint.deviceMemory;
        });
        expect(typeof deviceMemory).to.equal('number');
    });

    it('Battery should be true', async () => {
        const battery = await page.evaluate(async () => {
            const fingerprint = await fpCollect.generateFingerprint();
            return fingerprint.battery;
        });
        expect(battery).to.be.true;
    });

    it('debugTool should be true', async () => {
        const debugTool = await page.evaluate(async () => {
            const fingerprint = await fpCollect.generateFingerprint();
            return fingerprint.debugTool;
        });

        expect(debugTool).to.be.true;
    });

    it('iframeChrome should be undefined', async () => {
        const iframeChrome = await page.evaluate(async () => {
            const fingerprint = await fpCollect.generateFingerprint();
            return fingerprint.iframeChrome;
        });

        expect(iframeChrome).to.equal('undefined');
    });

    it('hasChrome should be false', async () => {
        const hasChrome = await page.evaluate(async () => {
            const fingerprint = await fpCollect.generateFingerprint();
            return fingerprint.hasChrome;
        });
        expect(hasChrome).to.be.false;
    });

    it('accelerometerUsed should be false', async () => {
        const accelerometerUsed = await page.evaluate(async () => {
            const fingerprint = await fpCollect.generateFingerprint();
            return fingerprint.accelerometerUsed;
        });
        expect(accelerometerUsed).to.be.false;
    });

    it('resOverflow should be an object', async () => {
        const resOverflow = await page.evaluate(async () => {
            const fingerprint = await fpCollect.generateFingerprint();
            return fingerprint.resOverflow;
        });
        expect(typeof resOverflow).to.equal('object');
    });

    it('errorsGenerated should be an array', async () => {
        const errorsGenerated = await page.evaluate(async () => {
            const fingerprint = await fpCollect.generateFingerprint();
            return fingerprint.errorsGenerated;
        });
        const expectedResult = ['azeaze is not defined',
            null,
            null,
            null,
            null,
            null,
            null,
            'Failed to construct \'WebSocket\': The URL \'itsgonnafail\' is invalid.'];

        expect(errorsGenerated).to.deep.equal(expectedResult);
    });

    it('webDriver should be true', async () => {
        const webDriver = await page.evaluate(async () => {
            const fingerprint = await fpCollect.generateFingerprint();
            return fingerprint.webDriver;
        });
        expect(webDriver).to.be.true;
    });

    it('fmget should be false', async () => {
        const fmget = await page.evaluate(async () => {
            const fingerprint = await fpCollect.generateFingerprint();
            return fingerprint.fmget;
        });
        expect(fmget).to.be.false;
    });

    it('domAutomation should be false', async () => {
        const domAutomation = await page.evaluate(async () => {
            const fingerprint = await fpCollect.generateFingerprint();
            return fingerprint.domAutomation;
        });
        expect(domAutomation).to.be.false;
    });

    it('nightmareJS should be false', async () => {
        const nightmareJS = await page.evaluate(async () => {
            const fingerprint = await fpCollect.generateFingerprint();
            return fingerprint.nightmareJS;
        });
        expect(nightmareJS).to.be.false;
    });

    it('Selenium should be an array', async () => {
        const selenium = await page.evaluate(async () => {
            const fingerprint = await fpCollect.generateFingerprint();
            return fingerprint.selenium;
        });
        expect(selenium instanceof Array).to.be.true;
    });

    it('PhantomJS should be an array', async () => {
        const phantomJS = await page.evaluate(async () => {
            const fingerprint = await fpCollect.generateFingerprint();
            return fingerprint.phantomJS;
        });
        expect(phantomJS instanceof Array).to.be.true;
    });

    it('screenDesc should be \'function () { [native code] }\'', async () => {
        const screenDesc = await page.evaluate(async () => {
            const fingerprint = await fpCollect.generateFingerprint();
            return fingerprint.screenDesc;
        });
        expect(screenDesc).to.equal('function () { [native code] }');
    });

    it('ETSL should be 33', async () => {
        const etsl = await page.evaluate(async () => {
            const fingerprint = await fpCollect.generateFingerprint();
            return fingerprint.etsl;
        });
        expect(etsl).to.equal(33);
    });

    it('Navigator prototype should be an object', async () => {
        const navigatorPrototype = await page.evaluate(async () => {
            const fingerprint = await fpCollect.generateFingerprint();
            return fingerprint.navigatorPrototype;
        });
        expect(typeof navigatorPrototype).to.equal('object');
    });

    it('productSub should be equal to 20030107', async () => {
        const productSub = await page.evaluate(async () => {
            const fingerprint = await fpCollect.generateFingerprint();
            return fingerprint.productSub;
        });

        expect(productSub).to.equal('20030107');
    });

    it('product should be equal to Gecko', async () => {
        const product = await page.evaluate(async () => {
            const fingerprint = await fpCollect.generateFingerprint();
            return fingerprint.product;
        });

        expect(product).to.equal('Gecko');
    });

    it('appName should be equal to Netscape', async () => {
        const appName = await page.evaluate(async () => {
            const fingerprint = await fpCollect.generateFingerprint();
            return fingerprint.appName;
        });

        expect(appName).to.equal('Netscape');
    });

    it('appCodeName should be equal to Mozilla', async () => {
        const appCodeName = await page.evaluate(async () => {
            const fingerprint = await fpCollect.generateFingerprint();
            return fingerprint.appCodeName;
        });

        expect(appCodeName).to.equal('Mozilla');
    });

    it('onLine should be true', async () => {
        const onLine = await page.evaluate(async () => {
            const fingerprint = await fpCollect.generateFingerprint();
            return fingerprint.onLine;
        });

        expect(onLine).to.equal(true);
    });

    it('doNotTrack should be false', async () => {
        const doNotTrack = await page.evaluate(async () => {
            const fingerprint = await fpCollect.generateFingerprint();
            return fingerprint.doNotTrack;
        });

        expect(doNotTrack).to.equal(false);
    });

    it('timezone should be a number', async () => {
        const timezone = await page.evaluate(async () => {
            const fingerprint = await fpCollect.generateFingerprint();
            return fingerprint.timezone;
        });

        expect(typeof timezone).to.equal("number");
    });

    it('historyLength should be a number', async () => {
        const historyLength = await page.evaluate(async () => {
            const fingerprint = await fpCollect.generateFingerprint();
            return fingerprint.historyLength;
        });

        expect(typeof historyLength).to.equal("number");
    });

    it('cookieEnabled should be true', async () => {
        const cookieEnabled = await page.evaluate(async () => {
            const fingerprint = await fpCollect.generateFingerprint();
            return fingerprint.cookieEnabled;
        });

        expect(cookieEnabled).to.equal(true);
    });

    it('computedStyleBody should be a string', async () => {
        const computedStyleBody = await page.evaluate(async () => {
            const fingerprint = await fpCollect.generateFingerprint();
            return fingerprint.computedStyleBody;
        });

        expect(typeof computedStyleBody).to.equal('string');
    });

    it('multimediaDevices should not be null', async () => {
        const multimediaDevices = await page.evaluate(async () => {
            const fingerprint = await fpCollect.generateFingerprint();
            return {
                speakers: fingerprint.multimediaDevices.speakers,
                micros: fingerprint.multimediaDevices.micros,
                webcams: fingerprint.multimediaDevices.webcams
            }
        });

        if ('TRAVIS' in process.env && 'CI' in process.env) {
            expect(multimediaDevices).to.deep.equal({
                speakers: 0,
                micros: 0,
                webcams: 0
            });
        } else {
            expect(typeof multimediaDevices).to.equal('object');
        }

    });

    it('videoCard should be [ \'Google Inc.\', \'Google SwiftShader\' ]', async () => {
        const videoCard = await page.evaluate(async () => {
            const fingerprint = await fpCollect.generateFingerprint();
            return fingerprint.videoCard;
        });
        expect(videoCard).to.deep.equal(['Google Inc.', 'Google SwiftShader']);
    });

    it('touchScreen should be [0, false, false]', async () => {
        const touchScreen = await page.evaluate(async () => {
            const fingerprint = await fpCollect.generateFingerprint();
            return fingerprint.touchScreen;
        });
        expect(touchScreen).to.deep.equal([0, false, false]);
    });

    it('screen should have 9 properties', async () => {
        const screen = await page.evaluate(async () => {
            const fingerprint = await fpCollect.generateFingerprint();
            return fingerprint.screen;
        });
        const isScreenValid = screen !== undefined && Object.keys(screen).length === 9;
        expect(isScreenValid).to.be.true;
    });

    it('Languages should be en-US', async () => {
        const languages = await page.evaluate(async () => {
            const fingerprint = await fpCollect.generateFingerprint();
            return fingerprint.languages;
        });

        const areLanguagesValid = typeof languages === 'object' &&
            languages.length === 1 &&
            languages[0] == 'en-US';

        expect(areLanguagesValid).to.be.true;
    });

    it('Language should be en-US', async () => {
        const language = await page.evaluate(async () => {
            const fingerprint = await fpCollect.generateFingerprint();
            return fingerprint.language;
        });

        expect(language).to.be.equal('en-US');
    });

    it('MimeTypes should not be null', async () => {
        const mimeTypes = await page.evaluate(async () => {
            const fingerprint = await fpCollect.generateFingerprint();
            return fingerprint.mimeTypes;
        });
        expect(mimeTypes).to.not.be.null;
    });

    it('Plugins should not be null', async () => {
        const plugins = await page.evaluate(async () => {
            const fingerprint = await fpCollect.generateFingerprint();
            return fingerprint.plugins;
        });
        expect(plugins).to.not.be.null;
    });

    it('screenMediaQuery should be false', async () => {
        const screenMediaQuery = await page.evaluate(async () => {
            const fingerprint = await fpCollect.generateFingerprint();
            return fingerprint.screenMediaQuery;
        });
        expect(screenMediaQuery).to.be.true;
    });

});
