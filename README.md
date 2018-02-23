# Fp-Collect

[![Build Status](https://travis-ci.org/antoinevastel/fp-collect.svg?branch=master)](https://travis-ci.org/antoinevastel/fp-collect)

Fingerprinting module of [Fingerprint-Scanner](https://github.com/antoinevastel/fpscanner), a library to detect 
bots/crawlers based on their fingerprint.

## Warning
The library is still in its early phase, many changes may occur.


## Getting Started

### Installation

```
npm install
```
and

```
npm build
```

It generates a minified version called **fpcollect.js** in the **dist/** directory.
### Usage

```
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
