import 'package:flutter/material.dart';
import 'package:url_strategy/url_strategy.dart';
import './header.dart';
import './tab_body.dart';

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
        home: SafeArea(bottom: false, child: HomeScreen()));
  }
}

class HomeScreen extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      body: ListView(children: <Widget>[Header(), TabBody()]),
    );
  }
}
