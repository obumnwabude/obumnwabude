import 'package:flutter/material.dart';
import 'package:url_launcher/url_launcher.dart';
import './social_icons.dart';
import './social_links.dart';

void main() {
  runApp(MyApp());
}

class MyApp extends StatelessWidget {
  String capitalize(String str) => str[0].toUpperCase() + str.substring(1);

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      debugShowCheckedModeBanner: false,
      title: 'Obumuneme Nwabude',
      theme: ThemeData(
        primarySwatch: Colors.lightBlue,
      ),
      home: Scaffold(
        body: Center(
          child: Column(
            mainAxisAlignment: MainAxisAlignment.center,
            children: <Widget>[
              ClipRRect(
                borderRadius: BorderRadius.circular(10000),
                child: Image.asset('assets/images/obum.jpg', width: 250),
              ),
              Padding(
                padding: EdgeInsets.only(top: 16.0, bottom: 32.0),
                child: Text(
                  'Obumuneme Nwabude',
                  style: Theme.of(context).textTheme.headline4,
                  textAlign: TextAlign.center,
                ),
              ),
              Row(
                  mainAxisAlignment: MainAxisAlignment.center,
                  children: socialLinks.map((sL) {
                    return IconButton(
                      padding: EdgeInsets.only(left: 2, right: 2),
                      icon: Icon(SocialIcons.icons[sL.icon], size: 36),
                      onPressed: () => launch(sL.link),
                      tooltip: capitalize(sL.icon),
                    );
                  }).toList())
            ],
          ),
        ),
      ),
    );
  }
}
