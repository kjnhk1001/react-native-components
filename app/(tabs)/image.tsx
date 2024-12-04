import React from "react";
import { Image, ScrollView, StyleSheet, View } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 16,
  },
  // 1. 固定サイズ
  fixedSize: {
    width: 100,
    height: 100,
  },
  // 2. 横幅を100%にして高さを自動調整
  fullWidth: {
    width: "100%",
    height: undefined,
    aspectRatio: 1.5, // 縦横比を1.5に固定
  },
  // 3. 親コンテナに合わせて表示（cover）
  coverImage: {
    width: "100%",
    height: "100%",
  },
  // 4. 縦横比を維持しつつ収める（contain）
  containImage: {
    width: "100%",
    height: "100%",
  },
  // 5. 引き伸ばし（stretch）
  stretchImage: {
    width: "100%",
    height: "100%",
  },
});

const DisplayLocalImage = () => (
  <View style={styles.container}>
    {/* 1. 固定サイズの画像表示 */}
    <Image
      source={require("../../assets/images/sample.png")}
      style={styles.fixedSize}
    />

    {/* 2. 横幅を100%にして縦横比を維持 */}
    <Image
      source={require("../../assets/images/sample.png")}
      style={styles.fullWidth}
      resizeMode="cover" // 縦横比を維持しつつ幅いっぱいに収める
    />

    {/* 3. 親コンテナに合わせて表示（cover） */}
    <View style={{ width: 200, height: 100, backgroundColor: "#eee" }}>
      <Image
        source={require("../../assets/images/sample.png")}
        style={styles.coverImage}
        resizeMode="cover" // コンテナ全体を埋めるようにリサイズ
      />
    </View>

    {/* 4. 縦横比を維持しつつ収める（contain） */}
    <View style={{ width: 200, height: 100, backgroundColor: "#eee" }}>
      <Image
        source={require("../../assets/images/sample.png")}
        style={styles.containImage}
        resizeMode="contain" // 縦横比を維持しつつ画像全体を表示
      />
    </View>

    {/* 5. 画像を引き伸ばす（stretch） */}
    <View style={{ width: 200, height: 100, backgroundColor: "#eee" }}>
      <Image
        source={require("../../assets/images/sample.png")}
        style={styles.stretchImage}
        resizeMode="stretch" // 画像を引き伸ばしてコンテナ全体を埋める
      />
    </View>

    {/*  URLを使用した画像の表示 */}
    {/* インターネット上の画像URLを'source'に指定。*/}
    <Image
      style={styles.fixedSize}
      source={{
        uri: "https://placehold.jp/150x150.png",
      }}
    />
  </View>
);

export default DisplayLocalImage;
