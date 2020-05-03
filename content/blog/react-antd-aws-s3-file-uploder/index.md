---
title: "React AWS S3 file-uploder in ant.design"
date: "2020-01-10"
description: ""
---

I know, I know how frustrated you are with ant.design while integrating the S3 into its default Uploader component. I can feel you,<br/>
That's why I think to write this article so one can save time😈.

In the official documentation, they have an example for an every-single feature but not all are in one example. I find it easy if most of the required functionality is all at once.

That's why i have the perfect artical follow along with me.

first, if you have to experience with the antd-react and specially the uploader component of it, when you integrate that first time in any project it is total pain in mind. haha but no worries i got you.

the props that are going to use is in snippet below.

```jsx
const props = {
  listType: String,
  disabled: Boolean,
  accept: String,
  onRemove: Function,
  onChange: Function,
  onPreview: Function,
  beforeUpload: Function,
  transformFile: Function,
  customRequest: Function,
}
```

## Description

1. listType: two options picture or picture-card.
2. disabled: whether to disable the component.
3. accept: comma-separated file formants when system file modal open this file formats will show -> .png,.jpeg,.jpg.
4. onRemove: when you remove the file.
5. onChange: on uploader change.
6. onPreview: image preview in the modal.
7. beforeUpload: before uploading the file this function is called.
8. transformFile: manipulate the file object before upload.
9. customRequest: by default, antd give us the upload file to servers but for different sources, we have to use the customRequest parameter.

### The common mistakes

1. they are using the parent component's state for managing the files in the child component (Uploader component)
2. while uploading the image the most recommending way is to rename the file so it is not getting replaced in storing system.

At first most of the developers use the parent component for the file object storing but it will take time to understand that this is not the proper way to do that, so for that being said we are now using only the uploader component's state for files object manipulation.

For renaming of the file in an earlier version of antd there is no `transformFile` prop is there to rename a file on the fly but from version 3.21.0 and up this default prop is coming.

```jsx{2,6-7}
transformFile: async file => {
  const attributs = await getWH(file);
  const renamedFile = await new File([file], `${new Date().getTime()}${removeSpace(file.name)}`, {
    type: file.type
  });
  renamedFile.height = attributs.height;
  renamedFile.width = attributs.width;
  return renamedFile;
},
```

```jsx
const getWH = file => {
  return new Promise(function(resolve, reject) {
    let filereader = new FileReader()
    filereader.onload = e => {
      let src = e.target.result
      const image = new Image()
      image.onload = function() {
        resolve({ width: this.width, height: this.height })
      }
      image.onerror = reject
      image.src = src
    }
    filereader.readAsDataURL(file)
  })
}
```

<br />
Next function is `beforeUpload` if you want to do something befour uploding the image or like some kind of validation and if that validation fails and you want to cancle the uploding the image then you can do this,
This function has to be return the Promise so you can `resolve` or `reject` based on your requirements.
<br />

```jsx{3}
beforeUpload: async e =>
  new Promise((resolve, reject) => {
    if(condition){
      resolve();
    } else {
      reject();
    }
}),
```

<br />
if you resolve then the process of uploading the file continues or reject then it will abort the uploding the file.
