def validIP?(address)
  # default value of valid is true
  valid = true
  # split the address sting by periods
  split_address = address.split(".")
  # get the length of the address
  address_length = split_address.length
  # set valid to false if the address' length is > 6 or < 4
  valid = false if address_length > 6 || address_length < 4
  # iterate through the address
  split_address.each do |num, i|
    # convert each item to a number
    num = num.to_i
    # check if any number is greater than 255 or less than 0
    valid = false if num > 255 || num < 0
  end
  # return if the address is valid or not as a boolean
  valid
end