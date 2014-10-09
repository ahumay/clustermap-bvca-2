(defproject clustermap-bvca-cljs "0.1.0-SNAPSHOT"
  :description "FIXME: write this!"
  :url "http://example.com/FIXME"

  :dependencies [[org.clojure/clojure "1.6.0"]
                 [org.clojure/clojurescript "0.0-2322" :scope "provided"]
                 [org.clojure/core.async "0.1.267.0-0d7780-alpha" :scope "provided"]
                 [weasel "0.4.0-SNAPSHOT"]
                 [figwheel "0.1.4-SNAPSHOT"]
                 [domina "1.0.2"]
                 [jayq "2.5.2"]
                 [om "0.7.3"]
                 [prismatic/om-tools "0.3.2" :exclusions [org.clojure/clojure]]
                 [sablono "0.2.22"]
                 [hiccups "0.3.0"]
                 [secretary "1.2.0"]
                 [com.andrewmcveigh/cljs-time "0.2.1"]
                 ]

;;  :exclusions [org.clojure/google-closure-library
;;               org.clojure/google-closure-library-third-party
;;               goog-jar]

  :jvm-opts ["-Xmx1g"
             "-server"
             "-XX:MaxPermSize=128m"
             "-XX:+CMSClassUnloadingEnabled"
             "-XX:+UseConcMarkSweepGC"]

  :source-paths ["src"]

  :plugins [[lein-cljsbuild "1.0.3"]
            [lein-figwheel "0.1.4-SNAPSHOT"]]

  :cljsbuild {
              :builds {:none
                       {:source-paths ["src"]
                        :compiler {
                                   :output-to  "resources/public/clustermap.js"
                                   :source-map true
                                   :output-dir "resources/public/cljs"
                                   :optimizations :none
                                   :pretty-print true}}

                       :whitespace
                       {:source-paths ["src"]
                        :compiler {
                                   :output-to  "cljs-out/whitespace/clustermap.js"
                                   :source-map "cljs-out/whitespace/clustermap.js.map"
                                   :output-dir "cljs-out/whitespace/cljs"
                                   :optimizations :whitespace
                                   :pretty-print true
                                   :output-wrapper false}}

                       :simple
                       {:source-paths ["src"]
                        :compiler {
                                   :output-to  "cljs-out/simple/clustermap.js"
                                   :source-map "cljs-out/simple/clustermap.js.map"
                                   :output-dir "cljs-out/simple/cljs"
                                   :optimizations :simple
                                   :pretty-print true
                                   :output-wrapper false}}

                       :advanced
                       {:source-paths ["src"]
                        :compiler {
                                   :output-to  "cljs-out/advanced/clustermap.js"
                                   :source-map "cljs-out/advanced/clustermap.js.map"
                                   :output-dir "cljs-out/advanced/cljs"
                                   :optimizations :advanced
                                   :output-wrapper false
                                   :externs ["react/externs/react.js"]}}}})
