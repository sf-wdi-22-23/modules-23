require "./numbers_to_words.rb"

describe "#in_words" do

  it "works on numbers smaller than 10" do
    expect( in_words(7) ).to eq "seven"
  end

  it "works on numbers between 10 and 20" do
    expect( in_words(16) ).to eq "sixteen"
  end

  it "works on numbers between 20 and 99" do
    expect( in_words(58) ).to eq "fifty eight"
  end

  it "works on numbers between 100 and 999" do
    expect( in_words(675) ).to eq "six hundred seventy five"
  end

  it "works on numbers between 1000 and 9999" do
    expect( in_words(7834) ).to eq "seven thousand eight hundred thirty four"
  end

  it "works on numbers between 10000 and 99999" do
    expect( in_words(48003) ).to eq "fourty eight thousand three"
  end
  
  it "works on numbers between 1000000 and 99999999" do
    expect( in_words(6800471) ).to eq "six million eight hundred thousand four hundred seventy one"
  end

end