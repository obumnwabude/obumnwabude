import 'package:flutter/material.dart';
import 'package:url_strategy/url_strategy.dart';
import 'package:visibility_detector/visibility_detector.dart';
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
        home: SafeArea(child: HomeScreen()));
  }
}

class HomeScreen extends StatefulWidget {
  @override
  _HomeScreenState createState() => _HomeScreenState();
}

class _HomeScreenState extends State<HomeScreen> {
  bool _isMobileShowcaseVisible = true;

  @override
  Widget build(BuildContext context) {
    bool _isMobile = MediaQuery.of(context).size.width < 600;

    return Scaffold(
        appBar: (_isMobile && _isMobileShowcaseVisible) || !_isMobile
            ? PreferredSize(
                preferredSize: Size.fromHeight(288),
                child: Header(),
              )
            : null,
        body: ListView(children: [
          if (_isMobile)
            VisibilityDetector(
              key: Key('my-widget-key'),
              onVisibilityChanged: (vis) {
                setState(() {
                  _isMobileShowcaseVisible = vis.visibleFraction == 0;
                });
              },
              child: MobileShowcase(),
            ),
          TabBody()
        ]));
  }
}
