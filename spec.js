const { browser, element, by } = require("protractor");

describe('Calculator test', function() {
  it('should greet the named user', function() {
   
    browser.get("https://juliemr.github.io/protractor-demo/");

    element(by.model("first")).sendKeys("13");
    element(by.model("second")).sendKeys("10");

    element(by.id("gobutton")).click();

    var text = element(by.css("h2[class='ng-binding']")).getText();
    
    expect(text).toBe("23");

  });
  it("Subtraction of numbers",function(){
    
  })
});
