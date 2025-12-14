describe("Recording 12/12/2025 at 15:14:06", () => {
  it("tests Recording 12/12/2025 at 15:14:06", async () => {
    await browser.setWindowSize(1440, 452)
    await browser.url("https://the-internet.herokuapp.com/login")
    await expect(browser).toHaveUrl("https://the-internet.herokuapp.com/login")
    await browser.$("#username").click()
    await browser.$("//*[@id=\"content\"]/div/h4/em[1]").doubleClick()
    await browser.performActions([{
      type: 'key',
      id: 'keyboard',
      actions: [{ type: 'keyDown', value: '' }]
    }])
    await browser.performActions([{
      type: 'key',
      id: 'keyboard',
      actions: [{ type: 'keyUp', value: '' }]
    }])
    await browser.$("#username").click()
    await browser.$("#username").setValue("tomsmith")
    await browser.$("//*[@id=\"content\"]/div/h4/em[2]").doubleClick()
    await browser.$("//*[@id=\"content\"]/div/h4/em[2]").doubleClick()
    await browser.$("//*[@id=\"content\"]/div/h4/em[2]").click()
    await browser.$("//*[@id=\"content\"]/div/h4/em[2]").click()
    await browser.$("#content").click()
    await browser.performActions([{
      type: 'key',
      id: 'keyboard',
      actions: [{ type: 'keyDown', value: '' }]
    }])
    await browser.performActions([{
      type: 'key',
      id: 'keyboard',
      actions: [{ type: 'keyUp', value: '' }]
    }])
    await browser.$("#password").click()
    await browser.$("#password").setValue("SuperSecretPassword!")
    await browser.$("aria/ Login").click()
    await expect(browser).toHaveUrl("https://the-internet.herokuapp.com/secure")
  });
});
