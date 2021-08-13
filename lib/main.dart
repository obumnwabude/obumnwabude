import 'package:flutter/material.dart';
import 'package:url_launcher/url_launcher.dart';
import './social_icons.dart';
import './social_links.dart';

void main() {
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
        home: HomeScreen());
  }
}

class HomeScreen extends StatelessWidget {
  String capitalize(String str) => str[0].toUpperCase() + str.substring(1);

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      body: ListView(
        children: <Widget>[
          Padding(
            padding: EdgeInsets.only(
                top: MediaQuery.of(context).orientation == Orientation.portrait
                    ? 128
                    : 32),
            child: Center(
              child: ClipRRect(
                borderRadius: BorderRadius.circular(10000),
                child: Image.asset('assets/images/obum.jpg', width: 250),
              ),
            ),
          ),
          Padding(
            padding: EdgeInsets.only(top: 16, bottom: 12),
            child: Text(
              'Obumuneme Nwabude',
              style: Theme.of(context).textTheme.headline4,
              textAlign: TextAlign.center,
            ),
          ),
          Padding(
            padding: const EdgeInsets.only(bottom: 32),
            child: Row(
                mainAxisAlignment: MainAxisAlignment.center,
                children: socialLinks.map((sL) {
                  return IconButton(
                      padding: EdgeInsets.only(left: 2, right: 2),
                      icon: Icon(SocialIcons.icons[sL.icon], size: 36),
                      onPressed: () => launch(sL.link),
                      tooltip: capitalize(sL.icon),
                      color: Colors.grey.shade700);
                }).toList()),
          )
        ],
      ),
    );
  }
}
