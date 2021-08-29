import 'package:flutter/material.dart';
import 'package:visibility_detector/visibility_detector.dart';
import './header.dart';

class HomeScreen extends StatefulWidget {
  @override
  _HomeScreenState createState() => _HomeScreenState();
}

class _HomeScreenState extends State<HomeScreen>
    with SingleTickerProviderStateMixin {
  bool _isMobileShowcaseVisible = true;

  List<Tab> myTabs = <Tab>[
    Tab(icon: Icon(Icons.directions_car)),
    Tab(icon: Icon(Icons.directions_transit)),
    Tab(icon: Icon(Icons.directions_bike)),
  ];

  late TabController _tabController;

  @override
  void initState() {
    super.initState();
    _tabController = TabController(vsync: this, length: myTabs.length);
  }

  @override
  void dispose() {
    _tabController.dispose();
    super.dispose();
  }

  @override
  Widget build(BuildContext context) {
    bool _isMobile = MediaQuery.of(context).size.width < 600;

    Widget _tabHeader = Container(
      margin: EdgeInsets.only(top: 32),
      child: TabBar(
        controller: _tabController,
        tabs: myTabs,
      ),
    );

    return Scaffold(
        appBar: (_isMobile && _isMobileShowcaseVisible) || !_isMobile
            ? PreferredSize(
                preferredSize: Size.fromHeight(288),
                child: Column(
                  children: [Header(), _tabHeader],
                ),
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
              child: Column(
                children: [MobileShowcase(), _tabHeader],
              ),
            ),
          SizedBox(
              height: 1000,
              child: TabBarView(controller: _tabController, children: [
                Icon(Icons.directions_car),
                Icon(Icons.directions_transit),
                Icon(Icons.directions_bike),
              ]))
        ]));
  }
}
