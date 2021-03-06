if ENV["ADB_DEVICE_ARG"].nil?
  require 'kraken-mobile/steps/web/kraken_steps'


  Then(/^I select option with value "(.*?)" for dropdown with id "(.*?)"$/) do |opValue, selId|
    drop = @driver.find_element(:id, selId)
    choose = Selenium::WebDriver::Support::Select.new(drop)
    choose.select_by(:value, opValue)
  end
  
  Then(/^I click on element having css selector "(.*?)"$/) do |selector|
    @driver.find_element(:css, selector).click
  end

  Then(/^I store a variable with the current url$/) do
    $url_variable = @driver.current_url    
    File.write('./.variable.txt', $url_variable)
    puts($url_variable) 
  end

  Given(/^I navigate to page with the url stored in the variable$/) do
    $url_variable = IO.read("./.variable.txt")  
    puts($url_variable)
    @driver.navigate.to $url_variable
    sleep 2
  end

  Then(/^I compare element "(.*?)" with text "(.*?)"$/) do |elementId, text|
    textElement = @driver.find_element(elementId).value
  end

  Then(/^I go to link "(.*?)"$/) do |selector|
    @driver.find_element(:css, selector).click
  end

  Then(/^I write "(.*?)" on element having css selector "(.*?)"$/) do |text,selector|
    @driver.find_element(:css, selector).value(text)
  end


  When(/^I write "(.*?)" on element having css selector "(.*?)"$/) do |text,selector|
    @driver.find_element(:css, selector).value(text)
  end

  When(/^I click on element having css selector "(.*?)"$/) do |selector|
    @driver.find_element(:css, selector).click
  end
 
  When(/^I click on link with text "(.*?)"$/) do |linkText|
    myPath = "//a[contains(@href,'"+linkText+"')]"
    @driver.find_element(:xpath, myPath).click
  end

  When(/^I click on span with text "(.*?)"$/) do |linkText|
    myPath = "//*[contains(text(),'"+linkText+"')]"
    mySpan = @driver.find_element(:xpath, myPath)
    mySpan.click
  end

  When(/^I write "(.*?)" on textarea with placeholder "(.*?)"$/) do |text,placeholder|
    myPath = "//textarea[contains(@placeholder,'"+placeholder+"')]"
    myTextArea = @driver.find_element(:xpath, myPath)
    myTextArea.send_keys(text)
  end

  When(/^I click on first element of list "(.*?)"$/) do |list|
    myPath = "//ol[contains(@class,'"+list+"')]"
    @driver.find_element(:xpath, myPath).click
  end

  When(/^I click on Publish$/) do 
    myPath = "//*[contains(@viewBox,'0 0 48 48')]"
    myPublish = @driver.find_element(:xpath, myPath)
    myPublish.click
  end

  When(/^I click on Config$/) do 
    myPath = "//*[@class='post-settings']"
    myConf = @driver.find_element(:xpath, myPath)
    myConf.click
  end

  When(/^I click on Delete post$/) do 
    myPath = "//*[contains(@viewBox,'0 0 24 24')]"
    myDelPost = @driver.find_element(:xpath, myPath)
    myDelPost.click
  end

  When(/^I click on Logout$/) do 
    myPath = "//*[contains(@viewBox,'0 0 48 48')]"
    myPublish = @driver.find_element(:xpath, myPath)
    myPublish.click
  end


  When(/^I click on element with class "(.*?)"$/) do |className|
    myPath = "//*[contains(@class,'"+className+"')]"
    e = @driver.find_element(:xpath, myPath)
    e.click
  end

  When(/^I write "(.*?)" on element with class "(.*?)"$/) do |text,className|
    myPath = "//html/body/div[2]/div/main/section/div[1]/div[1]/textarea[1]"
    e = @driver.find_element(:xpath, myPath)
    e.send_keys(text)
  end

  When(/^I click on button post$/) do
    sleep(4)
    myPath = "//html/body/div[2]/div/nav[1]/section/div[1]/ul[2]/li[2]/a[contains(@href,'posts')]"
    e = @driver.find_element(:xpath, myPath)
    e.click
  end

  When(/^I click on first post$/) do
    myPath = "//html/body/div[2]/div/main/section/section/ol/li[2]/a[contains(@href,'editor/post')]"
    e = @driver.find_element(:xpath, myPath)
    e.click
  end

  When(/^I click on first page$/) do
    myPath = "//html/body/div[2]/div/main/section/section/ol/li[2]/a[contains(@href,'editor/page')]"
    e = @driver.find_element(:xpath, myPath)
    e.click
  end

  When(/^I click on first tag$/) do
    myPath = "//html/body/div[2]/div/main/section/section/ol/li[2]/a[1]/h3"
    e = @driver.find_element(:xpath, myPath)
    e.click
  end


  When(/^I click on first button update$/) do
    myPath = "//html/body/div[2]/div/main/section/header/section/div/div[1]/span"
    e = @driver.find_element(:xpath, myPath)
    e.click
  end

  When(/^I click on second button update$/) do
    myPath = "//html/body/div[1]/div/footer/button[2]/span"
    e = @driver.find_element(:xpath, myPath)
    e.click
  end

  
  When(/^I click dummy on post$/) do
    sleep(2)
    myPath = "//html/body/div[2]/div/main/section/div[1]/div[1]/article/div[1]/div[1]"
    e = @driver.find_element(:xpath, myPath)
    e.click
  end
  
  When(/^I click on first button publish$/) do
    sleep(1)
    myPath = "//html/body/div[2]/div/main/section/header/section/div/div[1]/span"
    e = @driver.find_element(:xpath, myPath)
    e.click
  end

  When(/^I click on second button publish$/) do
    sleep(1)
    myPath = "//html/body/div[1]/div/footer/button[2]/span"
    e = @driver.find_element(:xpath, myPath)
    e.click
  end

  When(/^I click on button cancel near button publish$/) do
    sleep(1)
    myPath = "//html/body/div[1]/div/footer/button[1]/span"
    e = @driver.find_element(:xpath, myPath)
    e.click
  end

  When(/^I click on option schedule$/) do
    sleep(1)
    myPath = "//html/body/div[1]/div/div/section/div/div[2]/div[1]"
    e = @driver.find_element(:xpath, myPath)
    e.click
  end

  When(/^I click button config$/) do
    sleep(1)
    myPath = "//html/body/div[2]/div/main/section/header/section/button"
    e = @driver.find_element(:xpath, myPath)
    e.click
  end

  When(/^I click button delete$/) do
    sleep(1)
    myPath = "//html/body/div[4]/div[1]/div/div/div/div/div[1]/div/div[1]/div[2]/form/button/span"
    e = @driver.find_element(:xpath, myPath)
  end

  When(/^I click on button page$/) do
    sleep(4)
    myPath = "//html/body/div[2]/div/nav[1]/section/div[1]/ul[2]/li[3]/a[contains(@href,'pages')]"
    e = @driver.find_element(:xpath, myPath)
    e.click
  end

  When(/^I click on button new page$/) do
    sleep(4)
    myPath = "//html/body/div[2]/div/main/section/header/section/a/span"
    e = @driver.find_element(:xpath, myPath)
    e.click
  end

  Then(/^I should see first button publish$/) do
    sleep(1)
    myPath = "//html/body/div[2]/div/main/section/header/section/div/div[1]/span"
   
    if @driver.find_elements(:xpath, myPath).size() > 0
      e = @driver.find_element(:xpath, myPath)
    end

  end
  
  When(/^I click on button tag$/) do
    sleep(1)
    myPath = "//html/body/div[2]/div/nav[1]/section/div[1]/ul[2]/li[4]/a[contains(@href,'tags')]"
    e = @driver.find_element(:xpath, myPath)
    e.click
  end

  When(/^I click on button new tag$/) do
    sleep(1)
    myPath = "//html/body/div[2]/div/main/section/header/section/a/span"
    e = @driver.find_element(:xpath, myPath)
    e.click
  end

  When(/^I click on button save in new tag$/) do
    sleep(1)
    myPath = "//html/body/div[2]/div/main/section/form/header/section/button/span"
    e = @driver.find_element(:xpath, myPath)
    e.click
  end

  When(/^I click on button retry in new tag$/) do
    sleep(1)
    myPath = "//html/body/div[2]/div/main/section/form/header/section/button/span"
    e = @driver.find_element(:xpath, myPath)
    e.click
  end

  When(/^I clear element by id "(.*?)"$/) do |id|
    sleep(1)
    myPath = "//*[@id='"+id+"']"
    e = @driver.find_element(:xpath, myPath)
    e.clear
  end

  When(/^I click on button staff$/) do
    sleep(1)
    myPath = "//html/body/div[2]/div/nav[1]/section/div[1]/ul[2]/li[5]/a[contains(@href,'staff')]"
    e = @driver.find_element(:xpath, myPath)
    e.click
  end

  When(/^I click on button invite people/) do
    sleep(1)
    myPath = "//html/body/div[2]/div/main/section/header/section/button/span"
    e = @driver.find_element(:xpath, myPath)
    e.click
  end

  When(/^I click on button send invitation now/) do
    sleep(1)
    myPath = "//html/body/div[4]/div[2]/div/div/div/div[2]/section/div[2]/button/span"
    e = @driver.find_element(:xpath, myPath)
    e.click
  end

  When(/^I write email unique and valid on email adress$/) do
    sleep(1)
    myPath = "/html/body/div[4]/div[2]/div/div/div/div[2]/section/div[1]/fieldset/div[1]/input[1]"
    e = @driver.find_element(:xpath, myPath)
    mail = "mail@mail.com"
    e.send_keys(mail)
  end

  When(/^I write email unique and invalid on email adress$/) do
    sleep(1)
    myPath = "/html/body/div[4]/div[2]/div/div/div/div[2]/section/div[1]/fieldset/div[1]/input[1]"
    e = @driver.find_element(:xpath, myPath)
    mail = "mail.com"
    e.send_keys(mail)
  end

  When(/^I click on button to cancel invitation$/) do
    sleep(1)
    myPath = "//html/body/div[4]/div[2]/div/div/div/div[2]/section/a[1]"
    e = @driver.find_element(:xpath, myPath)
    e.click
  end



  



  

  


  


  

  


  

  
  


end
