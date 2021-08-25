#include<iostream>
using namespace std;

int main(){
    int r,count=1;
    cout<<"Enter no of rows:";
    cin>>r;

    for(int i=1;i<=r;i++){
        for(int j=1;j<=i;j++){
            cout<<count++<<" ";
        }
        cout<<"\n";
    }
    return 0;
}