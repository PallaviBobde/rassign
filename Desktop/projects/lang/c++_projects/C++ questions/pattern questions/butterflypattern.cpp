#include<iostream>
using namespace std;

int main(){
        int r;
        cout<<"Enter no of upper rows: ";
        cin>>r;
        for(int i=1;i<=r;i++){
            for(int j=1;j<=i;j++){
                cout<<"* ";
            }
            for(int j=1;j<=(r-i);j++){
                cout<<"  ";
            }
            for(int j=1;j<=(r-i);j++){
                cout<<"  ";
            }
            for(int j=1;j<=i;j++){
                cout<<"* ";
            }
            cout<<"\n";
        }
        for(int i=r;i>=1;i--){
            for(int j=1;j<=i;j++){
                cout<<"* ";
            }
            for(int j=1;j<=(r-i);j++){
                cout<<"  ";
            }
            for(int j=1;j<=(r-i);j++){
                cout<<"  ";
            }
            for(int j=1;j<=i;j++){
                cout<<"* ";
            }
            cout<<"\n";
        }

        return 0;
}