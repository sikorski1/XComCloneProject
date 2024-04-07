import { View, Text, Image, TouchableHighlight } from "react-native";
import { ICONS } from "../constants/icons";
export default function Product({navigation})
{
    const infoData = [
        {
            id: 1,
            icon: ICONS.checkIcon,
            title: "Dostępny",
            more: "Dowiedz się więcej"
        },
        {
            id: 2,
            icon: ICONS.truckIcon,
            title: "Darmowy odbiór w sklepie",
            more: "Koszt dostawy"
        },
        {
            id: 3,
            icon: ICONS.storeIcon,
            title: "Dostępny w salonach",
            more: "Wybierz salon"
        }]
    return (
        <View>
            <View>
                <Text onPress={() => navigation.goBack()}>{ICONS.leftArrowIcon}</Text>
                <Text>{ICONS.shareIcon}</Text>
            </View>
            <View>
                <Image />
            </View>
            <View>
                <Text>Samsung galaxy pro 123</Text>
                <Text>21,37 zł</Text>
                <TouchableHighlight>
                    <View>
                        <Text></Text>
                    </View>
                </TouchableHighlight>
                <TouchableHighlight>
                    <View>
                        <Text></Text>
                    </View>
                </TouchableHighlight>
                <TouchableHighlight>
                    <View>
                        <Text></Text>
                    </View>
                </TouchableHighlight>
                <View>
                    {infoData.map((item, index) => (
                        <View key={item.id}>
                            <Text>{item.icon}</Text>
                            <View>
                                <Text>{item.title}</Text>
                                <Text>{item.more}</Text>
                            </View>
                            <Text>{ICONS.rightArrowIcon2}</Text>
                        </View>   
                    ))}
                </View>
            </View>
        </View>
    )
}