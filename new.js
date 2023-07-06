var twoSum = function (nums, target) {
    let result = []
    let check
    for (let i = 0; i < nums.length; i++) {
        if (target - nums[i] !== nums[i] || nums.length == 2) {
            check = target - nums[i]

        } console.log(check)
        let checked = nums.findIndex((score) => {
            return score == check


        });
        console.log(checked)
        if (checked >= 0) {
            result.unshift(checked)
        }
    };
    console.log(result);
};
