import React from 'react'
import { Text, View, Image, TextInput, ScrollView, FlatList, StyleSheet, TouchableOpacity } from 'react-native'


const TermsAndCondition = (props) => {
    return (
        <ScrollView style={{ backgroundColor: 'white' }}>
            <View style={{ marginHorizontal: 20, marginTop: 42, display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                <TouchableOpacity onPress={() => props.navigation.goBack()} style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                    <Image style={{ width: 25, height: 25 }} source={require('../assets/images/Group24.png')} />
                </TouchableOpacity>
            </View>

            <Text style={{ color: '#000', fontSize: 20, marginHorizontal: 20, marginTop: 20, fontFamily: 'Poppins-Regular', fontWeight: 'bold' }}>
                Terms & Condition
            </Text>
            <Text style={{ marginHorizontal: 20, fontFamily: 'Poppins-Regular', fontSize: 13, marginTop: 15, }}>
                Welcome to Website Name!

                These terms and conditions outline the rules and regulations for the use of Company Name's Website, located at Website.com.

                By accessing this website we assume you accept these terms and conditions. Do not continue to use Website Name if you do not agree to take all of the terms and conditions stated on this page.

                The following terminology applies to these Terms and Conditions, Privacy Statement and Disclaimer Notice and all Agreements: “Client”, “You” and “Your” refers to you, the person log on this website and compliant to the Company's terms and conditions. “The Company”, “Ourselves”, “We”, “Our” and “Us”, refers to our Company. “Party”, “Parties”, or “Us”, refers to both the Client and ourselves. All terms refer to the offer, acceptance and consideration of payment necessary to undertake the process of our assistance to the Client in the most appropriate manner for the express purpose of meeting the Client's needs in respect of provision of the Company's stated services, in accordance with and subject to, prevailing law of Netherlands. Any use of the above terminology or other words in the singular, plural, capitalization and/or he/she or they, are taken as interchangeable and therefore as referring to same.
            </Text>
            <Text style={{ fontFamily: 'Poppins-Regular', fontSize: 15, fontWeight: 'bold', color: '#000', marginHorizontal: 20, marginTop: 15 }}>
                License
            </Text>
            <Text style={{ marginHorizontal: 20, fontFamily: 'Poppins-Regular', fontSize: 13, marginTop: 15, }}>
                Unless otherwise stated, Company Name and/or its licensors own the intellectual property rights for all material on Website Name. All intellectual property rights are reserved. You may access this from Website Name for your own personal use subjected to restrictions set in these terms and conditions.

                You must not:

                Republish material from Website Name
                Sell, rent or sub-license material from Website Name
                Reproduce, duplicate or copy material from Website Name
                Redistribute content from Website Name
                This Agreement shall begin on the date hereof.

                Parts of this website offer an opportunity for users to post and exchange opinions and information in certain areas of the website. Company Name does not filter, edit, publish or review Comments prior to their presence on the website. Comments do not reflect the views and opinions of Company Name,its agents and/or affiliates. Comments reflect the views and opinions of the person who post their views and opinions. To the extent permitted by applicable laws, Company Name shall not be liable for the Comments or for any liability, damages or expenses caused and/or suffered as a result of any use of and/or posting of and/or appearance of the Comments on this website.
            </Text>
            <Text style={{ fontFamily: 'Poppins-Regular', fontSize: 15, fontWeight: 'bold', color: '#000', marginHorizontal: 20, marginTop: 15 }}>
                Hyperlinking to our Content            </Text>
            <Text style={{ marginHorizontal: 20, fontFamily: 'Poppins-Regular', fontSize: 13, marginTop: 15, }}>
                Unless otherwise stated, Company Name and/or its licensors own the intellectual property rights for all material on Website Name. All intellectual property rights are reserved. You may access this from Website Name for your own personal use subjected to restrictions set in these terms and conditions.

                You must not:

                Republish material from Website Name
                Sell, rent or sub-license material from Website Name
                Reproduce, duplicate or copy material from Website Name
                Redistribute content from Website Name
                This Agreement shall begin on the date hereof.

                Parts of this website offer an opportunity for users to post and exchange opinions and information in certain areas of the website. Company Name does not filter, edit, publish or review Comments prior to their presence on the website. Comments do not reflect the views and opinions of Company Name,its agents and/or affiliates. Comments reflect the views and opinions of the person who post their views and opinions. To the extent permitted by applicable laws, Company Name shall not be liable for the Comments or for any liability, damages or expenses caused and/or suffered as a result of any use of and/or posting of and/or appearance of the Comments on this website.
            </Text>
        </ScrollView>
    )
}

export default TermsAndCondition
