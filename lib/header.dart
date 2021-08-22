import 'package:flutter/material.dart';
import 'package:url_launcher/url_launcher.dart';
import './social_icons.dart';
import './social_links.dart';

Widget _headerImage({required double width}) => ClipRRect(
      borderRadius: BorderRadius.circular(10000),
      child: Image.asset('assets/images/obum.jpg', width: width),
    );

String _capitalize(String str) => str[0].toUpperCase() + str.substring(1);

Widget _headerIcons({alignment = MainAxisAlignment.start}) => Row(
    mainAxisAlignment: alignment,
    children: socialLinks.map((sL) {
      return IconButton(
          padding: EdgeInsets.only(left: 2, right: 2),
          icon: Icon(SocialIcons.icons[sL.icon], size: 36),
          onPressed: () => launch(sL.link),
          tooltip: _capitalize(sL.icon),
          color: Colors.grey.shade700);
    }).toList());

class MobileShowcase extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return Column(
      crossAxisAlignment: CrossAxisAlignment.center,
      children: <Widget>[
        Container(
            margin: EdgeInsets.only(
                top: MediaQuery.of(context).orientation == Orientation.portrait
                    ? 128
                    : 32),
            child: Center(child: _headerImage(width: 288))),
        Container(
            margin: EdgeInsets.only(top: 16, bottom: 12),
            child: Row(children: [
              Expanded(
                  child: Text('Obumuneme Nwabude',
                      style: Theme.of(context).textTheme.headline4,
                      textAlign: TextAlign.center))
            ])),
        _headerIcons(alignment: MainAxisAlignment.center)
      ],
    );
  }
}

class Header extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    bool _isMobile = MediaQuery.of(context).size.width < 600;
    double _imgSize = _isMobile ? 96 : 168;
    double _gutter = _isMobile ? 8 : 24;
    TextStyle? _textStyle = _isMobile
        ? Theme.of(context).textTheme.headline6
        : Theme.of(context).textTheme.headline4;

    return Container(
        margin: EdgeInsets.only(top: 32),
        child: Row(
          mainAxisAlignment: MainAxisAlignment.center,
          crossAxisAlignment: CrossAxisAlignment.start,
          children: <Widget>[
            _headerImage(width: _imgSize),
            Container(
              height: _imgSize,
              margin: EdgeInsets.only(left: _gutter),
              child: Column(
                mainAxisAlignment: MainAxisAlignment.center,
                crossAxisAlignment: CrossAxisAlignment.start,
                children: [
                  Text('Obumuneme Nwabude', style: _textStyle),
                  if (!_isMobile) _headerIcons()
                ],
              ),
            )
          ],
        ));
  }
}
