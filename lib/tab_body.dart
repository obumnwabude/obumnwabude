import 'package:flutter/material.dart';

class TabBody extends StatefulWidget {
  @override
  _TabBodyState createState() => _TabBodyState();
}

class _TabBodyState extends State<TabBody> with SingleTickerProviderStateMixin {
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
    return Column(children: <Widget>[
      Container(
        margin: EdgeInsets.only(top: 48),
        child: TabBar(
          controller: _tabController,
          tabs: myTabs,
        ),
      ),
      SizedBox(
        height: 500,
        child: TabBarView(controller: _tabController, children: [
          Icon(Icons.directions_car),
          Icon(Icons.directions_transit),
          Icon(Icons.directions_bike),
        ]),
      ),
    ]);
  }
}
