#include<iostream>
#include<cmath>
using namespace std;
int main(){
    int num,flag=1;
    cout<<"Enter a no : ";
    cin>>num;
    
    for(int i=2 ; i<sqrt(num) ; i++){
        if((num%i)==0){
            cout<<"Not prime";
            flag=0;
            break;
        }
    }

    if(flag){
        cout<<"Prime";
    }
    return 0;
}