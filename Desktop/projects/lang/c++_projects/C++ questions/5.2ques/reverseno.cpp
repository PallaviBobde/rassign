#include<iostream>
using namespace std;

int main(){
    int num,lastdigit,originalnum,reversenum=0;
    cout<<"Enter a no: ";
    cin>>num;
    originalnum=num;

    while(num>0){
        lastdigit = num%10;
        reversenum = reversenum*10 + lastdigit;
        num = num/10;
    }
    cout<<"Original number: "<<originalnum;
    cout<<"\nReverse number: "<<reversenum;
    return 0;
}