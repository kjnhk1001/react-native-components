import React, { useState } from "react";
import { Text, StyleSheet } from "react-native";
import { SafeAreaView, SafeAreaProvider } from "react-native-safe-area-context";

const TextExample = () => {
  const [text, setText] = useState("タップしてテキストを変更！");

  // タップ時にテキストを変更する関数
  const onPressText = () => {
    setText("テキストが変更されました！");
  };

  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
        {/* style: テキストのスタイルを設定 */}
        <Text style={styles.styledText}>
          このテキストはカスタムフォントサイズ、色、配置が適用されています。
        </Text>

        {/* numberOfLines: テキストの表示行数を制限 */}
        <Text numberOfLines={1} style={styles.baseText}>
          このテキストは非常に長く、1行に制限されているため途中で切り捨てられます。長い文章を表示した場合、1行に収まらない部分は表示されません。
        </Text>

        {/* ellipsizeMode: 省略記号の位置を中央に設定 */}
        <Text numberOfLines={1} ellipsizeMode="middle" style={styles.baseText}>
          このテキストは非常に長いので中央で省略されます...例のテキストです。
        </Text>

        {/* onPress: タップ時に処理を実行 */}
        <Text onPress={onPressText} style={styles.pressableText}>
          {text}
        </Text>

        {/* adjustsFontSizeToFit: コンテナに収まるようフォントサイズを自動調整 */}
        <Text adjustsFontSizeToFit style={styles.baseText}>
          このテキストはコンテナの幅に収まるように自動でフォントサイズが調整されます。
        </Text>

        {/* allowFontScaling: システムのフォントサイズ設定に従ってスケール */}
        <Text allowFontScaling={true} style={styles.scaledText}>
          このテキストはシステムフォントサイズの設定に応じて拡大・縮小されます。
        </Text>

        {/* maxFontSizeMultiplier: フォントサイズの最大スケール倍率を制限 */}
        <Text maxFontSizeMultiplier={1.5} style={styles.baseText}>
          このテキストは最大で1.5倍までスケールされます。
        </Text>
      </SafeAreaView>
    </SafeAreaProvider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 16,
  },
  baseText: {
    fontSize: 16,
    color: "black",
    textAlign: "center",
    marginVertical: 4,
  },
  styledText: {
    fontSize: 20,
    color: "purple",
    fontWeight: "bold",
    textAlign: "center",
    marginVertical: 4,
  },
  pressableText: {
    fontSize: 18,
    color: "blue",
    textDecorationLine: "underline",
    marginVertical: 4,
  },
  scaledText: {
    fontSize: 18,
    color: "green",
    textAlign: "center",
    marginVertical: 4,
  },
});

export default TextExample;
