import {Image, Text, View} from 'react-native';

function Head() {
  return (
    <View
      style={{
        flexDirection: 'row',
        gap: 16,
        paddingHorizontal: 12,
        paddingTop: 14,
      }}>
      <Image
        source={require('./flag.png')}
        style={{width: 40, height: 40, borderRadius: 20}}></Image>
      <View style={{flex: 1, justifyContent: 'space-between'}}>
        <Text style={{fontSize: 18, color: '#293649'}}>Nghị quyết TW</Text>
        <Text style={{fontSize: 15, color: '#4B5563'}}>21-08-2019</Text>
      </View>
    </View>
  );
}

function Body() {
  return (
    <View
      style={{
        marginHorizontal: 12,
        marginBottom: 14,
        borderRadius: 4,
        overflow: 'hidden',
      }}>
      <Image
        source={require('./quochoi.png')}
        style={{width: 'auto', height: 208}}
      />
      <View style={{gap: 8, padding: 12, backgroundColor: '#FFF'}}>
        <Text style={{fontSize: 18, color: '#293649', fontFamily: 'Roboto'}}>
          Hội nghị cán bộ toàn quốc quán triệt Nghị quyết TW 8 khóa XII…
        </Text>
        <Text style={{fontSize: 16, color: '#4B5563', fontFamily: 'Roboto'}}>
          Ủy viên Bộ Chính trị, Thường trực Ban Bí thư Trần Quốc Vượng tới dự và
          phát biểu chỉ đạo Hội nghị…
        </Text>
      </View>
    </View>
  );
}
function Baiviet() {
  return (
    <View
      style={{
        backgroundColor: '#F2F2F2',
        shadowColor: '#000C',
        shadowOffset: {width: 2, height: 2},
        shadowOpacity: 0.5,
        gap: 14,
        marginHorizontal: 0,
        borderRadius: 4,
      }}>
      <Head />
      <Body />
    </View>
  );
}
export default Baiviet;
