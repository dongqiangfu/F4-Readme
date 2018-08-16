// ConsoleApplication1.cpp: 定义控制台应用程序的入口点。
//

#include "stdafx.h"

#include<iostream>

#include<cstdlib>

#include<cTime>

using namespace std;

int rollDice() {

	int die1 = 1 + rand() % 6;

	int die2 = 1 + rand() % 6;

	int sum = die1 + die2;

	cout << "player rolled " << die1 << "+" << die2 << "=" << sum << endl;

	return sum;

}

enum GameStatus { WIN, LOSE, PLAYER };

int main() {

	int sum, myPoint;

	GameStatus status;



	unsigned seed;

	cout << "Please enter an unsigned integer:";

	cin>>seed;

	srand(rand());

	srand((unsigned)time(NULL));

	sum = rollDice();  

	switch (sum) {

	case 7:

	case 11:

		status = WIN;

		break;

	case 2:

	case 3:

	case 12:

		status = LOSE;

		break;

	default:

		status = PLAYER;

		myPoint = sum;

		cout << "Point is " << myPoint << endl;

		break;

	}

	while (status == PLAYER) {

		sum = rollDice();

		if (sum == myPoint)

			status = WIN;

		else if (sum == 7)

			status = LOSE;

	}





	if (status == WIN)

		cout << "player wins" << endl;

	else

		cout << "Player loses" << endl;


	system("pause");
	return 0;

}
