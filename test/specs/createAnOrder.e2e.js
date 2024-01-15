const page = require('../../page');
const helper = require('../../helper')

describe('Create an order', () => {
    it('should open phone number modal', async () => {
        await browser.url(`/`)
        await page.fillAddresses('East 2nd Street, 601', '1300 1st St');
        const phoneNumberButton = await $(page.phoneNumberButton);
        await phoneNumberButton.waitForDisplayed();
        await phoneNumberButton.click();
        const pnoneNumberModal = await $(page.phoneNumberModal);
        await expect(pnoneNumberModal).toBeExisting(); 
    })

    it('Should fill the address', async () => {
        // Call the taxi to the address
        await browser.url(`/`)
        await page.fillAddresses('East 2nd Street, 601', '1300 1st St'); 
    })
    
    it('Should select supportive plan', async () => {
           // Selecting supportive plan
           await browser.url('/')
           await page.fillAddresses('East 2nd Street, 601', '1300 1st St');
           const supportiveButton = await $(page.supportiveButton);
           await supportiveButton.waitForDisplayed();
           await supportiveButton.click();
           await browser.pause(3000);

    })
    
    it('Should input phone number', async () => {
           // Input phone number
           await browser.url('/')
           await page.fillAddresses('East 2nd Street, 601', '1300 1st St');
           const phoneNumber = helper.getPhoneNumber("+1");
           await page.submitPhoneNumber(phoneNumber);
           await expect(await helper.getElementByText(phoneNumber)).toBeExisting(); 
           await browser.pause(3000); 

    })
       
    it('Should add a payment card', async () => {
         // Adding a payment card
         await browser.url('/')
         await page.fillAddresses('East 2nd Street, 601', '1300 1st St');
         await page.addPaymentMethodCard();
     
         const cardPaymentMethodIcon = await $(page.cardPaymentMethodIcon);
         await cardPaymentMethodIcon.waitForDisplayed();
         await expect(await $(cardPaymentMethodIcon)).toBeExisting(); 
         await browser.pause(3000); 

    })

    it('Should write a message for the driver', async () => {
        // Writing a message for the driver
        await browser.url('/')
        await page.fillAddresses('East 2nd Street, 601', '1300 1st St');
        const messageForDriver = await $(page.messageForDriver);
        await messageForDriver.waitForDisplayed();
        await messageForDriver.setValue("get water");
        await browser.pause(3000); 

    })

    

    it('Should order a blanket and handkerchief', async () => {
        // Ordering a blanket and handkerchief
        await browser.url('/')
        await page.fillAddresses('East 2nd Street, 601', '1300 1st St');
        const toggleButton = await $(page.toggleButton);
        await toggleButton.waitForDisplayed();
        await toggleButton.click();
        await browser.pause(3000); 
      
    })

    it('Should order 2 ice creams', async () => {
        // Ordering 2 ice creams
        await browser.url('/')
        await page.fillAddresses('East 2nd Street, 601', '1300 1st St');
        const iceCreamPlusButton = await $(page.iceCreamPlusButton);
        await iceCreamPlusButton.waitForDisplayed();
        await iceCreamPlusButton.click();
        await iceCreamPlusButton.click();
        const iceCreamValue = await $(page.iceCreamValue);
        const iceCreamValueFinal = await iceCreamValue.getText();
        await expect(iceCreamValueFinal).toBe("2");
        await browser.pause(3000); 
    })

    it('Should appear car search modal', async () => {
        //car search modal appears
        await browser.url('/')
        await page.fillAddresses('East 2nd Street, 601', '1300 1st St');
        const phoneNumber = helper.getPhoneNumber("+1");
        const messageForDriver = await $(page.messageForDriver);
        await messageForDriver.waitForDisplayed();
        await messageForDriver.setValue("get water");
        await page.submitPhoneNumber(phoneNumber);
      
        const orderButton = await $(page.orderButton);
        await orderButton.waitForDisplayed();
        await orderButton.click();
        await browser.pause(3000);

        const carSearchModal = await $(page.carSearchModal);
        await carSearchModal.waitForDisplayed();
        await expect(await $(carSearchModal)).toBeExisting();


       
    })








    
        
       

    

       

        



})
