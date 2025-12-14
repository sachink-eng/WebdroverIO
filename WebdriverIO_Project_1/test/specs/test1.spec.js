describe('DemoTest', function () {
    it('my first test', async () => {

        await browser.url('https://testautomationpractice.blogspot.com/');

        const name = await $('[id="name"]')
        await name.setValue('John');

        const email = await $('[id="email"]')
        await email.setValue('john@gmail.com');

        const mobno = await $('[id="phone"]')
        await mobno.setValue('9998887776');

        const address = await $('[id="textarea"]')
        await address.setValue('123, Elm Street, Springfield');

        const radioBtn = await $('[id="male"]')
        await radioBtn.click();

        const multiplecheckbox = ['Monday','tuesday','Friday'];

        for(const day of multiplecheckbox){
            await $('[id="monday"]').click();
            await $('[id="tuesday"]').click();
            await $('[id="friday"]').click();   
        }

        const dropdown = await $('[id="country"]')
        await dropdown.selectByVisibleText('Germany')

        const uploadfile = await browser.uploadFile('/Users/testvagrant/Downloads/Sachin_Resume.pdf')

        await browser.pause(7000);
});

});