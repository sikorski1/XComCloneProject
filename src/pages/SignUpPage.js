import { SafeAreaView, ScrollView, StatusBar } from "react-native"
import { Container, Solution1, Solution2 } from "../components/LabExercises"
export default function SignUpPage()

//ta strona przeznaczona na zadania na prezentacje, pozniej to sie wywali
{
    return (
        <SafeAreaView style={{ marginTop: StatusBar.currentHeight }}>
            <ScrollView>
            {/*zadanie 1*/}
                <Container>
                    <Solution1></Solution1>
                </Container>
                <Container>
                    <Solution2></Solution2>
                </Container>
            {/*zadanie 2*/}

        
            </ScrollView>
        </SafeAreaView>
    )
}