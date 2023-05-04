public class Test {
	
	public static int fly(int[] nums) {
		if(nums.length == 1){
            return 0;
        }
        int max = 0;
        int curr = 0;
        int count = 0;
        for(int i = 0 ; i < nums.length - 1 ; i++){
            max = Math.max(max , i + nums[i]);
            if(curr == i){
                curr = max;
                count++;
            }
            if(curr>nums.length-1){
                return count;
            }
        }
        return count;
    }

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		int[] nums = {1,6,3,4,5,0,0,0,6};
		int ans = fly(nums);
		System.out.println(ans);
		
	}

}
