import 'package:flutter/material.dart';
import 'package:url_strategy/url_strategy.dart';
import './home.dart';

void main() {
  setPathUrlStrategy();
  runApp(MyApp());
}

class MyApp extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
        debugShowCheckedModeBanner: false,
        title: 'Obumuneme Nwabude',
        theme: ThemeData(
          primarySwatch: Colors.lightBlue,
        ),
        home: SafeArea(child: HomeScreen()));
  }
}
