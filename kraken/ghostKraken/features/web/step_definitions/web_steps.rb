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
    myPath2 = "//*[contains(text(),'"+linkText+"')]"
    mySpan = @driver.find_element(:xpath, myPath2)
    mySpan.click
  end

  When(/^I write "(.*?)" on textarea with placeholder "(.*?)"$/) do |text,placeholder|
    myPath3 = "//textarea[contains(@placeholder,'"+placeholder+"')]"
    myTextArea = @driver.find_element(:xpath, myPath3)
    myTextArea.
    send_keys(text)
  end

  When(/^I click on first element of list "(.*?)"$/) do |list|
    myPath4 = "//ol[contains(@class,'"+list+"')]"
    @driver.find_element(:xpath, myPath4).click
  end

  When(/^I click on Publish$/) do 
    myPath5 = "//*[contains(@viewBox,'0 0 48 48')]"
    myPublish = @driver.find_element(:xpath, myPath5)
    myPublish.click
  end

  When(/^I click on Config$/) do 
    myPath6 = "//*[@class='post-settings']"
    myConf = @driver.find_element(:xpath, myPath6)
    myConf.click
  end

  When(/^I click on Delete post$/) do 
    myPath7 = "//*[contains(@viewBox,'0 0 24 24')]"
    myDelPost = @driver.find_element(:xpath, myPath7)
    myDelPost.click
  end

  When(/^I click on Logout$/) do 
    myPath8 = "//*[contains(@viewBox,'0 0 48 48')]"
    myPublish = @driver.find_element(:xpath, myPath8)
    myPublish.click
  end


end
