# Electronic Data Interchange Document Object Model

Data exchanged via Electronic Data Interchange (EDI) formats uses a hierarchical model. This lends itself to being expressed as a document tree, much like a markup language would. This readme describes the Document Object Model (DOM) provided by this library.

## Hierarchy

The most basic hierarchical model follows:
```
  Root
    => Interchange
      => Group
        => Message
          => Segment
            => Element
              => Value
```
