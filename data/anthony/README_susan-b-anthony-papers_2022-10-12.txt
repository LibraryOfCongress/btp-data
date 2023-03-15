Transcription dataset from the Susan B. Anthony Papers, Manuscript Division

By the People campaign: Susan B. Anthony Papers
Number of transcriptions: 5,156
Dataset created: 2022-10-12

NOTE: A previous version of this dataset from 2021-04-19 did not include the Tags field.

I. About this Dataset

This dataset is an export of transcriptions for 5,156 images from the Susan B. Anthony Papers created by volunteers participating in the Library of Congress crowdsourcing program By the People (https://crowd.loc.gov) campaign, Susan B. Anthony Papers. It contains text created by volunteers through a transcription and review process, volunteer-created tags, digital collections metadata, and metadata representing the arrangement of the items in the By the People platform, Concordia.

By the People invites anyone to contribute to the Library of Congress as a virtual volunteer by transcribing and reviewing digital images of texts to enhance Library of Congress digital collections. Transcriptions are created and reviewed by volunteers in a consensus model that requires at least two volunteers to complete a transcription. Volunteer-created transcriptions are then published on the Library's website (https://www.loc.gov) alongside images of the original documents to improve search and discovery of digital collections and to improve accessibility of the text within the images. 

This dataset includes transcriptions and data generated from the pages in the By the People campaign Susan B. Anthony Papers (https://crowd.loc.gov/campaigns/susan-b-anthony-papers/). The campaign consisted of a selection of then available online images of digitized content from the Susan B. Anthony Papers (http://hdl.loc.gov/loc.mss/collmss.ms000065). The papers of the reformer and suffragist span the period 1846-1934 and capture her interests in abolition and women's education, her campaign for women's property rights and suffrage in New York, and her work with the National Woman Suffrage Association (NWSA). The transcription campaign included the correspondence, daybook and diaries, and speeches and writing series of the collection. See the Anthony digital collection for all available online items for this collection, as well as contextual information, such as a timeline and bibliographic resources.


II. What’s included?

This dataset includes:
-	2020445591_v2.zip - a zip file containing a CSV file and a README file
-	susan-b-anthony-papers_2022-10-12.csv - a .CSV containing campaign, project, item, itemID, asset, and asset status metadata, as well as an image URL, the volunteer-created transcriptions, and volunteer-created tags. This .CSV is the direct export of the Susan B. Anthony campaign.

Note: This dataset may contain UNICODE characters or lengthy transcriptions which may display incorrectly in some spreadsheet editors.


III. How Was It Created?

The transcriptions and tags were created by volunteers as part of the Library of Congress By the People program. By transcribing historical texts, virtual volunteers enhance Library of Congress digital collections. 

Transcriptions are created by anonymous and registered volunteers. Registered volunteers can review the transcriptions created by other volunteers. At least one volunteer must accept a transcription as whole and accurate before it is marked complete. A transcription may undergo multiple rounds of edits before being completed. Once completed, transcriptions are spot-checked by Library of Congress subject matter experts before they are incorporated into the digital collections on the Library's website to enhance search and accessibility.

Volunteers are instructed to transcribe the text as written, including misspellings and abbreviations. Formatting is generally not preserved with the exception of line breaks. Minimal markup does include “?” for illegible or unclear text, square brackets around deleted text, and square brackets and asterisks around marginalia ([*example*]). Pages without text are marked “nothing to transcribe” and do not have transcriptions in loc.gov.

Registered volunteers can tag images with text in any way they choose. Volunteers have used tags to highlight key terms or subjects from the text, identify the document format or language, expand abbreviated words, note correct spelling of misspelled words, and record contextual information about the document. Tags are not selected from a controlled vocabulary and may include variations of similar terms, misspellings, or other errors.

The Susan B. Anthony Papers transcription data were created by 938 registered volunteers and an unknown number of anonymous contributors. The Library of Congress thanks all By the People volunteers for sharing their time and knowledge with us. The Susan B. Anthony Papers campaign was fully transcribed and reviewed between June 3, 2019 and May 11, 2020.

Following the completion of the entire campaign via the peer review process and review by a subject matter expert, By the People Community Managers exported a CSV report from the campaign to create the file, susan-b-anthony-papers_2022-10-12.csv.

The organization of the data and metadata included represents the arrangement of the items in the By the People platform, Concordia (https://github.com/LibraryOfCongress/concordia), an open source platform developed by the Library of Congress for crowdsourced transcription.


IV. Dataset Field Descriptions
This section lists and describes each of the fields included in the CSV file.

-	Campaign – this is the highest hierarchical level in the arrangement of collections on By the People (example: https://crowd.loc.gov/campaigns/susan-b-anthony-papers/). This field displays the campaign’s title.

-	Project – this is the second-highest hierarchical level of collections on By the People. Projects may map to an existing subset of a digital collection, such as an archival series, or may be a grouping of related items uniquely organized for By the People. This field displays the project’s title.

-	Item – this is the third-highest hierarchical level of collections on By the People, typically representing a folder, letter, document, or diary. This field displays the item title. 

-	ItemId – this is the identifier for the item (see above for definition). This numerical identifier is consistent across the By the People website and in loc.gov. The item and metadata are usually located on the Library’s website at https://www.loc.gov/item/[ItemID]/

-	Asset – this is the identifier for the individual asset image. It is also referred to colloquially as the “page” by By the People volunteers and Community Managers. This identifier is used in the By the People site and on loc.gov. 

-	AssetStatus – this indicates the status of the asset in the peer review workflow – Not Started, In Progress, Needs Review, or Completed. Dataset assets will always be marked as “Completed.” 

-	DownloadURL – this link provides access to the image file for the Asset from which the transcription was created.

-	Transcription – this is the text created by the By the People volunteers, representing the written content of the DownloadURL image and corresponding to the Asset. This field will be blank for assets that volunteers marked “Nothing to transcribe”.

-	Tags – these are all the tags that have been applied to the asset. If there is more than one tag, the tags are delimited by a semicolon and space.


V. Rights statement 

The text in this dataset was created by volunteers and can be used in many different ways. All contributions to the By the People application are released into the public domain as they are created. Anyone is free to use and re-use this dataset in any way they want. 


VI. Creator and Contributor Information

Creator: By the People volunteers

Contributors: By the People team, Manuscript Division


VII. Contact Information

Please direct all questions and comments to the By the People team via email to crowd@loc.gov.
