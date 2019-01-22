### Bundler size tests

Quick test to confirm the actual bundle sizes of the latest versions of webpack + rollup & how much boilerplate
webpack really adds. 

This only tests a single CJS file exporting a string. Under other scenarios both package managers may add different 
boilerplate content (especially rollup, which adds nothing under these circumstances).

*Result:* (minified, but not gzipped)
- Webpack: 954 bytes 
- Rollup: 31 bytes

