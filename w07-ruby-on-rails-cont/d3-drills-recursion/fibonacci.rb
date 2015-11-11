# NON RECURSIVE

def fibonacci ammount
	fibs = [1,1]
	ammount.times do 
		fibs << fibs[-1] + fibs[-2]
	end 
	fibs
end

p fibonacci 100


def recursive_fibonacci ammount, array=[1,1]
	if ammount > 0
		array << array[-1] + array[-2] 
		recursive_fibonacci ammount - 1, array
	end
	array
end	


p recursive_fibonacci 100
