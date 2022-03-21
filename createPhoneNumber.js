//Program takes an array of 10 numbers and turns it into phone number format (123) 456-7890
//my way:

function createPhoneNumber(numbers) {
    var nums1 = '';
    var nums2 = '';
    var nums3 = '';
    for (let i = 0; i < numbers.length; i++) {
        
        if (i < 3) {
            nums1 = nums1 + numbers[i];
            
        }
        else if (i > 2 && i < 6) {
            nums2 = nums2 + numbers[i];
            
        }
        else {
            nums3 = nums3 + numbers[i];
        }

    }
    nums1 = '(' + nums1 + ')';
    console.log(nums1 + ' ' + nums2 + '-' +nums3);
    
}



createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]);
createPhoneNumber([1, 1, 1, 1, 1, 1, 1, 1, 1, 1]);



// console.log(nums1);
// console.log(nums2);
// console.log(nums3);


//easy way:

function createPhoneNumber(numbers){
    var format = "(xxx) xxx-xxxx";
    
    for(var i = 0; i < numbers.length; i++)
    {
      format = format.replace('x', numbers[i]);
    }
    
    return format;
  }