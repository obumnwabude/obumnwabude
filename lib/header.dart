import 'package:flutter/material.dart';
import 'package:url_launcher/url_launcher.dart';
import './social_icons.dart';
import './social_links.dart';

const _kHeaderImageDesktopHeight = 168.0;

Widget _headerImage(bool isMobile) => ClipRRect(
      borderRadius: BorderRadius.circular(10000),
      child: Image.asset('assets/images/obum.jpg',
          width: isMobile ? 288 : _kHeaderImageDesktopHeight),
    );

Widget _headerName(BuildContext context, bool isMobile) => Text(
      'Obumuneme Nwabude',
      style: Theme.of(context).textTheme.headline4,
      textAlign: isMobile ? TextAlign.center : TextAlign.left,
    );

String _capitalize(String str) => str[0].toUpperCase() + str.substring(1);

Widget _headerIcons(bool isMobile) => Row(
    mainAxisAlignment:
        isMobile ? MainAxisAlignment.center : MainAxisAlignment.start,
    children: socialLinks.map((sL) {
      return IconButton(
          padding: EdgeInsets.only(left: 2, right: 2),
          icon: Icon(SocialIcons.icons[sL.icon], size: 36),
          onPressed: () => launch(sL.link),
          tooltip: _capitalize(sL.icon),
          color: Colors.grey.shade700);
    }).toList());

class HeaderRightDesktop extends StatelessWidget {
  const HeaderRightDesktop({
    Key? key,
    required bool isMobile,
  })  : _isMobile = isMobile,
        super(key: key);

  final bool _isMobile;

  @override
  Widget build(BuildContext context) {
    return Container(
      margin: EdgeInsets.only(left: 24),
      child: Column(
        mainAxisAlignment: MainAxisAlignment.center,
        crossAxisAlignment: CrossAxisAlignment.start,
        children: [_headerName(context, _isMobile), _headerIcons(_isMobile)],
      ),
    );
  }
}

class Header extends StatelessWidget {
  bool _isMobileScreen(BuildContext context) =>
      MediaQuery.of(context).size.width < 600;

  bool _isPortraitOrient(BuildContext context) =>
      MediaQuery.of(context).orientation == Orientation.portrait;

  @override
  Widget build(BuildContext context) {
    bool _isMobile = _isMobileScreen(context);
    bool _isPortrait = _isPortraitOrient(context);

    if (_isMobile) {
      return Column(
        crossAxisAlignment: CrossAxisAlignment.center,
        children: <Widget>[
          Container(
              margin: EdgeInsets.only(top: _isPortrait ? 128 : 32),
              child: Center(child: _headerImage(_isMobile))),
          Container(
              margin: EdgeInsets.only(top: 16, bottom: 12),
              child: Row(children: [
                Expanded(child: _headerName(context, _isMobile))
              ])),
          Container(
              margin: EdgeInsets.only(bottom: 48),
              child: _headerIcons(_isMobile))
        ],
      );
    } else {
      return Container(
        height: _kHeaderImageDesktopHeight,
        margin: EdgeInsets.only(top: 32, bottom: 48),
        child: Row(
          mainAxisAlignment: MainAxisAlignment.center,
          crossAxisAlignment: CrossAxisAlignment.start,
          children: <Widget>[
            _headerImage(_isMobile),
            HeaderRightDesktop(isMobile: _isMobile)
          ],
        ),
      );
    }
  }
}
