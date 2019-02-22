import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  ListView,
  Dimensions,
  TouchableWithoutFeedback
} from "react-native";
import PHOTOS from "./src/data";
import { processImages, buildRows, normalizeRows } from "./src/utils";
import PhotoGallery from "./src/PhotoGallery";
import GridItem from "./src/GridItem";

import Header from "./src/Header";

const { width } = Dimensions.get("window");

export default class App extends React.Component {
  state = {
    dataSource: null
  };

  componentWillMount() {
    const processedImages = processImages(PHOTOS);
    let rows = buildRows(processedImages, width);
    rows = normalizeRows(rows, width);

    const ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2
    });

    this.setState({
      dataSource: ds.cloneWithRows(rows)
    });
  }

  renderRow = (onPhotoOpen, row) => (
    <View
      style={{
        flexDirection: "row",
        marginBottom: 5,
        justifyContent: "space-between"
      }}
    >
      {row.map(item => (
        <GridItem item={item} key={item.id} onPhotoOpen={onPhotoOpen} />
      ))}
    </View>
  );

  render() {
    return (
      <React.Fragment>
        <Header />
        <PhotoGallery
          renderContent={({ onPhotoOpen }) => (
            <ListView
              dataSource={this.state.dataSource}
              renderRow={this.renderRow.bind(this, onPhotoOpen)}
            />
          )}
        />
      </React.Fragment>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff"
  }
});
