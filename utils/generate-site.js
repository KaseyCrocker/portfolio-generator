const fs = require('fs');

const writeFile = fileContent => {
    return new Promise((resolve, reject) => {
        fs.writeFile('./dist/index.html', fileContent, err => {
            if (err) {
              reject(err);
              return;
            }
            console.log('Page created! Check out index.html in this directory to see it!');
            resolve({
                ok: true,
                message: 'File created!'
            });
        });
    });
};

const copyFile = () => {
    return new Promise((resolve, reject) => {
        fs.copyFile('./src/style.css', './dist/style.css', err => {
            if (err) {
              reject(err);
              return;
            }
            resolve({
                ok: true,
                message: 'File created!'
            });
        });
    });
};


writeFile(pageHtml)
  .then(successfulResponse => {
    // this will run when we use `resolve()`
    console.log(successfulResponse);
  })
  .catch(errorResponse => {
    // this will run when we use `reject()`
    console.log(errorResponse);
  });

copyFile()