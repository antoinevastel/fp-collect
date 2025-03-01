# Fp-Collect

[![Build Status](https://travis-ci.org/antoinevastel/fp-collect.svg?branch=master)](https://travis-ci.org/antoinevastel/fp-collect)


## News:
I recently created a [website where you can see your browser fingerprint](https://deviceandbrowserinfo.com/info_device) and different fingerprinting-related signals like your IP address, your canvas fingerprint, your HTTP headers, etc. Some information is accessible both through a webpage and through APIs. If you're looking for a more recent fingerprinting and bot detection online test, you can also have a look at [fingerprint-scan.com](https://fingerprint-scan.com).

------------

Fingerprinting module of [Fingerprint-Scanner](https://github.com/antoinevastel/fpscanner), a library to detect 
bots/crawlers based on their fingerprint.

## Getting Started

### Installation

```
npm install
```
and

```
npm run-script build
```

It generates a minified version called **fpCollect.min.js** in the **dist/** directory.
### Usage

```javascript
const fingerprint = await fpCollect.generateFingerprint();

//or

fpCollect.generateFingerprint().then((fingerprint) => {
    // Do something with the fingerprint
});

```

### Running the tests

Fp-collect use Puppeteer and Chrome headless to run its tests.
They can be launched using *npm test*.

## Attributes collected

Fp-collect collects only attributes required to detect bots, not attributes classically 
used for fingerprinting tracking, such as canvas.
Details on the attributes and their meaning can be found in
[Fingerprint-Scanner](https://github.com/antoinevastel/fpscanner).

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details
