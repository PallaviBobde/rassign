#include<iostream>
using namespace std;

int main(){
    int r;
    cout<<"Enter no of rows: ";
    cin>>r;
    for(int i=r;i>0;i--){
        for(int j=1;j<=i;j++){
            cout<<"*";
        }
        cout<<"\n";
    }

    return 0;
}