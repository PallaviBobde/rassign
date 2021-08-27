#include<iostream>
#include<math.h>
using namespace std;

int main(){
    int num,lastdigit,originalnum,cubesum=0;
    cout<<"Enter a no: ";
    cin>>num;
    originalnum = num;

    while(num>0){
        lastdigit = num%10;
        cubesum += pow(lastdigit,3);
        num = num/10;
    }

    if(cubesum == originalnum){
        cout<<originalnum<<" is an Armstrong number.";
    }
    else{
        cout<<originalnum<<" is not an Armstrong number.";
    }
    return 0;
}