/* 
来源：力扣（LeetCode）
链接：https://leetcode.cn/problems/add-without-plus-lcci
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。

面试题 17.01. 不用加号的加法
设计一个函数把两个数字相加。不得使用 + 或者其他算术运算符。

示例:
输入: a = 1, b = 1
输出: 2
 

提示：
a, b 均可能是负数或 0
结果不会溢出 32 位整数

使用位运算，leetcode官方解答

利用位运算来解决A+B的问题，可以将此问题转化为解决不进位相加和进位(carry bit)的两部分问题：
1. 首先是不进位相加：_A = A^B 先对A和B进行异或运算(XOR manupitation) , A 和B 中两位不相同的变为1，相同的变为 0， 同为1是不进位
2. 其次是进位  _B =(A&B)<<1
所以 A+B = A^B + (A&B)<<1
3.在循环中(A&B)<<1 的目的是将要进位的1一直向左移动，之后与新生成的_A进行异或运算，来进行进位运算的模拟（这一步就是进位）
4. 直到将所有的1全部向左移位为0
 */

/**
 * @param {number} a
 * @param {number} b
 * @return {number}
 */
 var add = function(a, b) {
    while (b != 0) {
        console.log('b1-',b);
        const carry = (a & b) << 1;
        console.log('b',b);
        a = a ^ b;
        console.log('a',a);
        b = carry;
    }
    return a;
};

console.log(add(52,23));