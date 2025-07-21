import { Image, StyleSheet, Text, View } from 'react-native';
import { theme } from './themes/theme';

type TicketInfoProps = {
  theme: theme;
};

const TicketInfo = (props: TicketInfoProps) => {
  return (
    <View
      style={[
        styles.ticketContainer,
        { backgroundColor: props.theme.background },
      ]}
    >
      <View style={styles.flex}>
        <View>
          <Text
            style={[
              styles.timeTxt,
              { color: props.theme.text, marginBottom: 20 },
            ]}
          >
            11:45 PM
          </Text>

          <Text style={[styles.airportTxt, { color: props.theme.text }]}>
            LAX
          </Text>
          <Text style={[{ color: props.theme.text, fontSize: 14 }]}>
            Los Angeles
          </Text>
          <Text style={[{ color: props.theme.text, fontSize: 14 }]}>
            International Airport
          </Text>
          <View style={styles.iconFlex}>
            <Text
              style={[
                {
                  color: '#1591EA',
                  marginTop: 15,
                  fontWeight: 600,
                  fontSize: 16,
                },
              ]}
            >
              DEPARTURE
            </Text>
            <Image
              source={require('./assets/flight_takeoff.png')}
              style={styles.flightIcon}
            />
          </View>
        </View>

        <View style={{ top: 50 }}>
          <Text style={{ color: '#B8B8BD', fontSize: 34, fontWeight: 600 }}>
            . . .
          </Text>
          <Text style={styles.timeBox}>12h 20</Text>
        </View>

        <View>
          <Text
            style={[
              styles.timeTxt,
              { color: props.theme.text, marginBottom: 20 },
            ]}
          >
            01:13 AM
          </Text>

          <Text style={[styles.airportTxt, { color: props.theme.text }]}>
            SYD
          </Text>
          <Text style={[{ color: props.theme.text, fontSize: 14 }]}>
            Sydney Kingsford
          </Text>
          <Text style={[{ color: props.theme.text, fontSize: 14 }]}>
            Smith Airport
          </Text>
          <View style={styles.iconFlex}>
            <Text
              style={[
                {
                  color: '#ffd60a',
                  marginTop: 15,
                  fontWeight: 600,
                  fontSize: 16,
                },
              ]}
            >
              ARRIVAL
            </Text>
            <Image
              source={require('./assets/flight_land.png')}
              style={styles.flightIcon}
            />
          </View>
        </View>
      </View>

      <View style={styles.flex}>
        <View style={styles.flexCol}>
          <Text style={{ color: props.theme.text }}>FLIGHT</Text>
          <Text style={[styles.timeTxt, { color: props.theme.text }]}>
            TLC986
          </Text>
        </View>

        <View style={styles.flexCol}>
          <Text style={{ color: props.theme.text }}>SEAT</Text>
          <Text style={[styles.timeTxt, { color: props.theme.text }]}>14A</Text>
        </View>

        <View style={styles.flexCol}>
          <Text style={{ color: props.theme.text }}>TERMINAL</Text>
          <Text style={[styles.timeTxt, { color: props.theme.text }]}>01</Text>
        </View>
      </View>

      <View style={styles.flex}>
        <Image source={require('./assets/air-france.png')} style={styles.img} />

        <View style={styles.flexCol}>
          <Text style={[styles.timeTxt, { color: props.theme.text }]}>
            A350-1221
          </Text>

          <View style={{ flexDirection: 'row', gap: 15 }}>
            <View>
              <Text style={[{ color: props.theme.text, fontWeight: 200 }]}>
                Seating:
              </Text>
              <Text style={[{ color: props.theme.text, fontWeight: 200 }]}>
                Range:
              </Text>
              <Text style={[{ color: props.theme.text, fontWeight: 200 }]}>
                Speed:
              </Text>
            </View>

            <View>
              <Text style={[{ color: props.theme.text }]}>366</Text>
              <Text style={[{ color: props.theme.text }]}>13,700km</Text>
              <Text style={[{ color: props.theme.text }]}>870km/h</Text>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  ticketContainer: {
    right: 1,
    width: 386,
    paddingHorizontal: 20,
    paddingVertical: 30,
    borderTopRightRadius: 50,
    borderBottomRightRadius: 50,
    bottom: 130,
    gap: 30,
    paddingBottom: 70,
  },
  flex: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  flexCol: {
    gap: 10,
  },
  timeTxt: {
    fontSize: 24,
    fontWeight: 600,
  },
  airportTxt: {
    fontSize: 28,
    fontWeight: 600,
  },
  timeBox: {
    backgroundColor: '#929299',
    color: 'white',
    borderRadius: 10,
    paddingHorizontal: 5,
    fontWeight: 600,
    right: 3,
  },
  img: {
    height: 100,
    width: 210,
    transform: [{ rotate: '-15deg' }],
  },
  flightIcon: {
    height: 20,
    width: 20,
    position: 'absolute',
    right: 0,
    top: 15,
  },
  iconFlex: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});

export default TicketInfo;
