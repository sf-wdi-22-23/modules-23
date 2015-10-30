require_relative '../ip_address_validator'

describe "validIP?" do
  it "returns true for 4-6 places" do
    expect(validIP?("0.0.0.0")).to eq(true)
    expect(validIP?("0.0.0.0.0")).to eq(true)
    expect(validIP?("0.0.0.0.0.0")).to eq(true)
  end
  it "returns false for less than 4 places" do
    expect(validIP?("0.0.0")).to eq(false)
    expect(validIP?("0.0")).to eq(false)
  end
  it "returns false for greater than 6 places" do
    expect(validIP?("0.0.0.0.0.0.0")).to eq(false)
    expect(validIP?("0.0.0.0.0.0.0.0")).to eq(false)
  end
  it "contains numbers between 0 and 255" do
    expect(validIP?("255.0.0.0.0.0")).to eq(true)
    expect(validIP?("0.50.100.150.200.255")).to eq(true)
  end
  it "contains no number greater than 255" do
    expect(validIP?("256.0.0.0.0.0")).to eq(false)
    expect(validIP?("1000.1000.1000.1000.1000.1000")).to eq(false)
  end
  it "contains no number less than 0" do
    expect(validIP?("-1.0.0.0.0.0")).to eq(false)
    expect(validIP?("-1000.-1000.-1000.-1000.-1000.-1000")).to eq(false)
  end
end