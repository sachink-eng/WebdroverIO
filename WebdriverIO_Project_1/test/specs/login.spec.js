// const LoginPage = require('../pages/login.page');

// describe('DemoTest', function () {
//     it('my first test', async () => {
//         await browser.url('https://the-internet.herokuapp.com/login');

//         await LoginPage.login('tomsmith', 'SuperSecretPassword!');

//         await LoginPage.getLoginMessageText('You logged into a secure area!');

//         // await $('#username').setValue('tomsmith');
//         // await $('#password').setValue('SuperSecretPassword!');
//         // await $('button[type="submit"]').click();
//         // await expect($('#flash')).toHaveTextContaining('You logged into a secure area!');

//     });

// });
const LoginPage = require('../pages/login.page');

describe('DemoTest', () => {
    it('my first test', async () => {

        browser.url('https://the-internet.herokuapp.com/login');

        await LoginPage.login('tomsmith', 'SuperSecretPassword!');   // ✅ FIXED

        // await LoginPage.checkMessage('You logged into a secure area!');
    });
});

 