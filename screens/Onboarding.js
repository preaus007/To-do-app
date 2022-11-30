import React from "react";
import { Dimensions, SafeAreaView, Text } from "react-native";

const {width, height} = Dimensions.get('window');

const COLORS = {primary: '#282534', white: '#FFF'};

const slides = [
    {
        id: '1',
        image: require('../images/image1.png'),
        title: 'Best Digital Solution',
        subtitle: 'Lorem ipsum dolor sit amet consecte tuer adipsing elit sed diam monum my nibh eusimod eltor',
    },
    {
        id: '2',
        image: require('../images/image2.png'),
        title: 'Achieve Your Goal',
        subtitle: 'Lorem ipsum dolor sit amet consecte tuer adipsing elit sed diam monum my nibh eusimod eltor',
    },
    {
        id: '3',
        image: require('../images/image3.png'),
        title: 'Increase Your Value',
        subtitle: 'Lorem ipsum dolor sit amet consecte tuer adipsing elit sed diam monum my nibh eusimod eltor',
    },
];

const Onboarding = ({navigation}) => {
    return <SafeAreaView></SafeAreaView>
}

const style = StyleSheet.create({});
export default Onboarding;