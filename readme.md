# Processing and Visualizing By the People Transcription Data
---
## About the data
This tutorial provides an example of data processing and visualization using transcription data from By the People, the Library of Congress's crowdsourced transcriptioning program. By the People invites anyone to contribute to the Library of Congress as a virtual volunteer by transcribing and reviewing digital images of texts to enhance Library of Congress digital collections. The Library of Congress thanks all By the People volunteers for sharing their time and knowledge with us to make this tutorial possible. 

By the People transcriptions and tags are created by anonymous and registered volunteers. Once a transcription is finished, it must be reviewed by a registered volunteer. A transcription may undergo multiple rounds of edits before being completed. Finally, transcriptions are spot-checked by Library of Congress subject matter experts before they are incorporated into the digital collections on the Library's website to enhance search and accessibility. Transcriptions are also packaged into .csv files and made available as datasets as part of the [Selected Datasets Collection](https://www.loc.gov/collections/selected-datasets/).

In this tutorial we will work with four datasets related to the movement for women's suffrage in the United States. Each dataset’s README includes additional information about its content and creation
- Anthony, Susan B. Transcription datasets from Susan B. Anthony Papers, Manuscript Division. compiled by By The People. Washington, D.C.: By the People, Library of Congress, to 2022, 2021. Software, E-Resource. https://www.loc.gov/item/2020445591/.
- Catt, Carrie Chapman. Transcription datasets from Carrie Chapman Catt Papers, Manuscript Division. compiled by By The People. Washington, D.C.: By the People, Library of Congress, to 2022, 2020. Software, E-Resource. https://www.loc.gov/item/2019667239/.
- Stanton, Elizabeth Cady. Transcription datasets from Elizabeth Cady Stanton Papers, Manuscript Division. compiled by By The People. Washington, D.C.: By the People, Library of Congress, 2021. Software, E-Resource. https://www.loc.gov/item/2020445592/.
- Terrell, Mary Church. Transcription dataset from the Mary Church Terrell Papers, Manuscript Division. compiled by By The People. Washington, D.C.: By the People, Library of Congress, to 2021, 2018. Software, E-Resource. https://www.loc.gov/item/2021387726/.

Transcription volunteers are instructed to transcribe the text as written, including misspellings and abbreviations. Formatting is generally not preserved with the exception of line breaks. Minimal markup does include “?” for illegible or unclear text, square brackets around deleted text, and square brackets and asterisks around marginalia `([*example*])`. Pages without text are marked “nothing to transcribe” and do not have transcriptions in [loc.gov](https://www.loc.gov/).

By the People datasets contain the following fields:
- Campaign – this is the highest hierarchical level in the arrangement of collections on By the People (example: [Susan B. Anthony Papers](https://crowd.loc.gov/campaigns/susan-b-anthony-papers/)). This field displays the campaign’s title.
- Project – this is the second-highest hierarchical level of collections on By the People. Projects may map to an existing subset of a digital collection, such as an archival series, or may be a grouping of related items uniquely organized for By the People. This field displays the project’s title.
- Item – this is the third-highest hierarchical level of collections on By the People, typically representing a folder, letter, document, or diary. This field displays the item title. 
- ItemId – this is the identifier for the item (see above for definition). This numerical identifier is consistent across the By the People website and in loc.gov. The item and metadata are usually located on the Library’s website at `https://www.loc.gov/item/[ItemID]/`
- Asset – this is the identifier for the individual asset image. It is also referred to colloquially as the “page” by By the People volunteers and Community Managers. This identifier is used in the By the People site and on loc.gov. 
- AssetStatus – this indicates the status of the asset in the peer review workflow – Not Started, In Progress, Needs Review, or Completed. Dataset assets will always be marked as “Completed.” 
- DownloadURL – this link provides access to the image file for the Asset from which the transcription was created.
- Transcription – this is the text created by the By the People volunteers, representing the written content of the DownloadURL image and corresponding to the Asset. This field will be blank for assets that volunteers marked “Nothing to transcribe”.
- Tags – these are all the tags that have been applied to the asset. If there is more than one tag, the tags are delimited by a semicolon and space.

---

## About the notebooks
This tutorial first cleans and processes transcriptions from the four datasets using [Pandas](https://pandas.pydata.org/) and the [spaCy](https://spacy.io/) Natural Language Processing library. This code tokenizes the transcriptions, breaking the strings of text into tokens (words) that will be further analyzed. It then identifies the lemma, or root, for each word. For example, the lemma of "voted" is "vote", and the lemma of "women" is "woman". The code next iterates over each token to produce a list of lemmas from the original transcriptions that excludes stop words, punctuation, numbers, and words that volunteers were unable to fully transcribe, which are designated with "?". Stop words are commonly used words, such as "the", "a", or "is".

The tutorial then creates two visualizations from the cleaned data using the [Matplotlib](https://matplotlib.org/) and [Numpy](https://numpy.org/) Python libraries. The first is a combined bar graph showing the five most used words for each of the four datasets. The second is a focused look at the "Speeches" series from the Susan B. Anthony Papers. With data coming from a [typed inventory of speeches](http://hdl.loc.gov/loc.mss/ms997009.mss11049.036) found in the collection, this code groups Anthony's speeches by year, and then plots the usage of the top five words in her speeches by year.

---

## Running the notebooks
In order to run a Jupyter notebook, navigate to the directory that contains the notebook files using `cd /path/to/dcm-btp-notebooks`, then run the command `jupyter notebook`. This will launch the Notebook Dashboard in an Internet browser.

In order to properly run these notebooks, make sure that the appropriate Python libraries are installed. The dataset files are already included in this tutorial in the `data` directory (along with each dataset’s README), which can be seen in the Notebook Dashboard.

An entire notebook can be run by clicking `Run` in the menu bar. Individual cells can be run by clicking into the cell, then hitting `Shift + Enter`. The notebooks in this tutorial must be run in order, from 2 to 5.

These notebooks contain optional code that can be run to print results to the notebook. This helps show what the code is doing at each step. These cells have “Optional:” in the title. Add `#` to the beginning of a line of code to comment out the lines you do not want to run.

The outputs from `Data-Processing` will be saved to the `outputs` directory, which can be seen in the Notebook Dashboard.

---

## Prerequisites, dependencies, and jupyter commands
This repo contains Jupyter Notebooks and therefore requires `jupyter` to be installed before launching a Jupyter session.

### Prerequisites
1. If you are using Anaconda Python, `jupyter` should already be installed.
2. If you are using a different Python distribution, install `jupyter` with the following `pip` command:
```
pip install notebook
```

### Dependencies
1. The following libraries are required:
- `pandas` *Anaconda Default
- `re` *Python Standard Library
- `ast` *Python Standard Library
- `matplotlib` *Anaconda Default
- `numpy` *Anaconda Default
- `collections` *Python Standard Library
- `operator` *Python Standard Library
- `spacy`
2. If you are using Anaconda Python, all libraries except for `spacy` should already be installed. Install `spacy` using the following:
```
pip install -U pip setuptools wheel
pip install -U spacy
python -m spacy download en_core_web_lg
```
> Note: Do not use `pip install --user` with Anaconda.

3. For other Python installations, you will need to install `pandas`, `matplotlib`, and `numpy`, unless you have previously installed these. You can install them with:
```
pip install pandas matplotlib numpy
```
Then, install `spacy`:
```
pip install -U pip setuptools wheel
pip install -U spacy
python -m spacy download en_core_web_lg
```
### Starting a Jupyter session
1. Launch an Anaconda Prompt (or whatever shell you use to run Python)
2. `cd` into the `dcm-btp-notebooks` directory
3. Run the command `jupyter notebook`
4. A new tab should open in your browser listing the contents of the `dcm-btp-notebooks` directory

### Create an empty notebook
1. Once a Jupyter session is running, use the `New` drop-down and select `Python 3`
2. Give the notebook a name
3. Open the `file` menu and choose `Save and Checkpoint`
4. Start adding content!

## Authorship and use
These notebooks were created by Dave Durden and Madeline Goebel, Digital Collection Specialists at the Library of Congress. They are marked with a [CC0 1.0 Universal](https://creativecommons.org/publicdomain/zero/1.0/) public domain dedication.

All contributions to the By the People application are released into the public domain as they are created. Anyone can use and re-use the datasets in any way they want.

----

<p xmlns:cc="http://creativecommons.org/ns#" xmlns:dct="http://purl.org/dc/terms/"><a property="dct:title" rel="cc:attributionURL" href="https://github.com/LibraryOfCongress/btp-data/">Processing and Visualizing By the People Transcription Data</a> by <span property="cc:attributionName">David Durden and Madeline Goebel</span> is marked with <a href="http://creativecommons.org/publicdomain/zero/1.0?ref=chooser-v1" target="_blank" rel="license noopener noreferrer" style="display:inline-block;">CC0 1.0<img style="height:22px!important;margin-left:3px;vertical-align:text-bottom;" src="https://mirrors.creativecommons.org/presskit/icons/cc.svg?ref=chooser-v1"><img style="height:22px!important;margin-left:3px;vertical-align:text-bottom;" src="https://mirrors.creativecommons.org/presskit/icons/zero.svg?ref=chooser-v1"></a></p>