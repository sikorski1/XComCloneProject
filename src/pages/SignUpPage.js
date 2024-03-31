import { SafeAreaView, ScrollView, StatusBar, Text } from "react-native"
import { Container, Solution1, Solution2 } from "../components/LabExercises"
export default function SignUpPage()

//ta strona przeznaczona na zadania na prezentacje, pozniej to sie wywali
{
    return (
        <SafeAreaView style={{ marginTop: StatusBar.currentHeight }}>
            <ScrollView>
                {/*zadanie 1, 2*/}
                <Container>
                    <Solution1></Solution1>
                </Container>
            {/*zadanie 3*/}
                <Container>
                    <Solution2></Solution2>
                </Container>

        
            </ScrollView>
        </SafeAreaView>
    )
}